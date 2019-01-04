import React from 'react'
import { connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from '../actions/filters';
import { start } from 'repl';


export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused : null
    }
    onDateChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    }
    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.dispatch(sortbyDate())
        } else {
            this.props.dispatch(sortbyAmount())
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
                onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
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
    sortbyDate: () => dispatch(sortbyDate()),
    sortbyAmount: () => dispatch(sortbyAmount())
})

export default connect(mapStateToProps)(ExpenseListFilter)