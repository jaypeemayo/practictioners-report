import * as React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "./DatePicker";
import * as moment from "moment";

export interface IDateRangePickerProps {
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    monthsShown?: number;
    onChangeStartDate?: (date: moment.Moment) => void;
    onChangeEndDate?: (date: moment.Moment) => void;
}

export const DateRangePicker = (props: IDateRangePickerProps) =>
    <div className="d-flex flex-row">
        <div className="">
            <DatePicker
                onChange={props.onChangeStartDate}
                monthsShown={props.monthsShown}
                selected={props.startDate}
                selectsStart={true}
                startDate={props.startDate}
                endDate={props.endDate}
                maxDate={props.maxDate}
                minDate={props.minDate}
            />
        </div>
        <div className="pl-2">
            <DatePicker
                onChange={props.onChangeEndDate}
                monthsShown={props.monthsShown}
                selected={props.endDate}
                selectsEnd={true}
                startDate={props.startDate}
                endDate={props.endDate}
                maxDate={props.maxDate}
                minDate={props.minDate}
            />
        </div>
    </div>;
