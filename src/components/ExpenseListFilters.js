import React from 'react'
import { connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilter extends React.Component {
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
}
const ExpenseListFilter = (props) => (
    <div>
        <input type="text" 
            value={props.filters.text}  
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select 
            value={props.filters.sortBy}
            onChange={(e) => {
            if(e.target.value === 'date') {
                props.dispatch(sortbyDate())
            } else {
                props.dispatch(sortbyAmount())
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }

}

export default connect(mapStateToProps)(ExpenseListFilter)