import React from 'react'
import { connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from '../actions/filters';


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
    render() {
        return (
            <div>
            <input type="text" 
                value={this.props.filters.text}  
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }}
            />
            <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                if(e.target.value === 'date') {
                    this.props.dispatch(sortbyDate())
                } else {
                    this.props.dispatch(sortbyAmount())
                }
            }}>
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

export default connect(mapStateToProps)(ExpenseListFilter)