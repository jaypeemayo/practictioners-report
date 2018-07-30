import DatePicker from "react-datepicker";
import * as React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import * as moment from "moment";

export interface IDatePickerProps {
    monthsShown?: number;
    selectsStart?: boolean;
    selectsEnd?: boolean;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    onChange: (date: moment.Moment) => void;
    selected?: moment.Moment;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    dateFormat?: string;
}

export default class DatePicker extends React.Component<IDatePickerProps> {
    render() {
        let props = this.props;
        return <DatePicker
            minDate={props.minDate}
            maxDate={props.maxDate}
            selected={props.selected}
            onChange={props.onChange}
            dateFormat={props.dateFormat || "DD/MM/YYYY"}
            monthsShown={props.monthsShown}
            selectsStart={props.selectsStart}
            selectsEnd={props.selectsEnd}
            startDate={props.startDate}
            endDate={props.endDate}
        />;
    }
}
