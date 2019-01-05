
import 'react-dates/initialize';
import React from 'react'
import { connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null
    }
    onDatesChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate()
        } else {
            this.props.sortByAmount()
        }
    }
    render() {
        return (
            <div>
            <input type="text" 
                value={this.props.filters.text}  
                onChange={this.onTextChange}
            />
            <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                startDateId={'1'}
                endDateId={'1'}
                />
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setEndDate:  (endDate) => dispatch(setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)