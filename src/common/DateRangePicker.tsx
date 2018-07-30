import * as React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "./DatePicker";
import * as moment from "moment";

export interface IDateRangePickerProps {
    maxDate?: moment.Moment;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    monthsShown?: number;
    onChangeStartDate?: (date: moment.Moment) => void;
    onChangeEndDate?: (date: moment.Moment) => void;
}

export default class DateRangePicker extends React.Component<IDateRangePickerProps> {
    render() {
        let props = this.props
        return (<>
            <div>
                <DatePicker
                    onChange={props.onChangeStartDate}
                    monthsShown={props.monthsShown}
                    selected={props.startDate}
                    selectsStart={true}
                    selectsEnd={false} // todo, check later if can be removed
                    startDate={props.startDate}
                    endDate={props.endDate}
                    maxDate={props.maxDate}
                />
            </div>
            <div>
                <DatePicker
                    onChange={props.onChangeEndDate}
                    monthsShown={props.monthsShown}
                    selected={props.endDate}
                    selectsStart={false} //// todo, check later if can be removed
                    selectsEnd={true}
                    startDate={props.startDate}
                    endDate={props.endDate}
                    maxDate={props.maxDate}
                />
            </div>
        </>);
    }
}
