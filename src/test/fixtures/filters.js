import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endData: undefined
}



const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endData: moment(0).add(3, 'days')
}

export { filter, altFilters}