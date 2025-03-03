import { FilterKey, IssueType } from 'Types/filter/filterType';

export const options = [
  { key: 'on', text: 'on', value: 'on' }, 
  { key: 'notOn', text: 'not on', value: 'notOn' },
  { key: 'onAny', text: 'on any', value: 'onAny' },
  { key: 'is', text: 'is', value: 'is' },
  { key: 'isAny', text: 'is any', value: 'isAny' },
  { key: 'inAnyPage', text: 'in any page', value: 'isAny' },
  { key: 'isNot', text: 'is not', value: 'isNot' },
  { key: 'startsWith', text: 'starts with', value: 'startsWith' },
  { key: 'endsWith', text: 'ends with', value: 'endsWith' },
  { key: 'contains', text: 'contains', value: 'contains' },
  { key: 'notContains', text: 'not contains', value: 'notContains' },
  { key: 'hasAnyValue', text: 'has any value', value: 'hasAnyValue' },
  { key: 'hasNoValue', text: 'has no value', value: 'hasNoValue' },   
  { key: 'isSignedUp', text: 'is signed up', value: 'isSignedUp' },
  { key: 'notSignedUp', text: 'not signed up', value: 'notSignedUp' },  
  { key: 'before', text: 'before', value: 'before' },
  { key: 'after', text: 'after', value: 'after' },
  { key: 'inRage', text: 'in rage', value: 'inRage' },
  { key: 'notInRage', text: 'not in rage', value: 'notInRage' },
  { key: 'withinLast', text: 'within last', value: 'withinLast' },
  { key: 'notWithinLast', text: 'not within last', value: 'notWithinLast' },
  { key: 'greaterThan', text: 'greater than', value: 'greaterThan' },
  { key: 'lessThan', text: 'less than', value: 'lessThan' },
  { key: 'equal', text: 'equal', value: 'equal' },
  { key: 'not equal', text: 'not equal', value: 'not equal' },
  { key: 'onSelector', text: 'on selector', value: 'onSelector' },
  { key: 'onText', text: 'on text', value: 'onText' },
  { key: 'onComponent', text: 'on component', value: 'onComponent' },
];

const filterKeys = ['is', 'isNot'];
const stringFilterKeys = ['is', 'isAny', 'isNot', 'contains', 'startsWith', 'endsWith', 'notContains'];
const stringFilterKeysPerformance = ['is', 'inAnyPage', 'isNot', 'contains', 'startsWith', 'endsWith', 'notContains'];
const targetFilterKeys = ['on', 'notOn', 'onAny', 'contains', 'startsWith', 'endsWith', 'notContains'];
const signUpStatusFilterKeys = ['isSignedUp', 'notSignedUp'];
const rangeFilterKeys = ['before', 'after', 'on', 'inRange', 'notInRange', 'withInLast', 'notWithInLast'];

const getOperatorsByKeys = (keys) => {
  return options.filter(option => keys.includes(option.key));
};

export const baseOperators = options.filter(({key}) => filterKeys.includes(key));
export const stringOperators = options.filter(({key}) => stringFilterKeys.includes(key));
export const stringOperatorsPerformance = options.filter(({key}) => stringFilterKeysPerformance.includes(key));
export const targetOperators = options.filter(({key}) => targetFilterKeys.includes(key));
export const booleanOperators = [
  { key: 'true', text: 'true', value: 'true' },
  { key: 'false', text: 'false', value: 'false' },
]

export const customOperators = [
  { key: '=', text: '=', value: '=' },
  { key: '<', text: '<', value: '<' },
  { key: '>', text: '>', value: '>' },
  { key: '<=', text: '<=', value: '<=' },
  { key: '>=', text: '>=', value: '>=' },
]

export const metricTypes = [
  { text: 'Timeseries', value: 'timeseries' },
  { text: 'Table', value: 'table' },
];

export const tableColumnName = {
    [FilterKey.USERID]: 'Users',
    [FilterKey.ISSUE]: 'Issues',
    [FilterKey.USER_BROWSER]: 'Browsers',
    [FilterKey.USER_DEVICE]: 'Devices',
    [FilterKey.USER_COUNTRY]: 'Countries',
    [FilterKey.LOCATION]: 'URLs',
}

export const metricOf = [
  { text: 'Session Count', value: 'sessionCount', type: 'timeseries' },
  { text: 'Users', value: FilterKey.USERID, type: 'table' },
  { text: 'Issues', value: FilterKey.ISSUE, type: 'table' },
  { text: 'Browsers', value: FilterKey.USER_BROWSER, type: 'table' },
  { text: 'Devices', value: FilterKey.USER_DEVICE, type: 'table' },
  { text: 'Countries', value: FilterKey.USER_COUNTRY, type: 'table' },
  { text: 'URLs', value: FilterKey.LOCATION, type: 'table' },
]

export const methodOptions = [
  { text: 'GET', value: 'GET' },
  { text: 'POST', value: 'POST' },
  { text: 'PUT', value: 'PUT' },
  { text: 'DELETE', value: 'DELETE' },
  { text: 'PATCH', value: 'PATCH' },
  { text: 'HEAD', value: 'HEAD' },
  { text: 'OPTIONS', value: 'OPTIONS' },
  { text: 'TRACE', value: 'TRACE' },
  { text: 'CONNECT', value: 'CONNECT' },  
]

export const issueOptions = [
  { text: 'Click Rage', value: IssueType.CLICK_RAGE },
  { text: 'Dead Click', value: IssueType.DEAD_CLICK },
  { text: 'Excessive Scrolling', value: IssueType.EXCESSIVE_SCROLLING },
  { text: 'Bad Request', value: IssueType.BAD_REQUEST },
  { text: 'Missing Resource', value: IssueType.MISSING_RESOURCE },
  { text: 'Memory', value: IssueType.MEMORY },
  { text: 'CPU', value: IssueType.CPU },
  { text: 'Slow Resource', value: IssueType.SLOW_RESOURCE },
  { text: 'Slow Page Load', value: IssueType.SLOW_PAGE_LOAD },
  { text: 'Crash', value: IssueType.CRASH },
  { text: 'Custom', value: IssueType.CUSTOM },
  { text: 'Error', value: IssueType.JS_EXCEPTION },
]

export default {
  options,
  baseOperators,
  stringOperators,
  targetOperators,
  booleanOperators,
  customOperators,
  stringOperatorsPerformance,
  getOperatorsByKeys,
  metricTypes,
  metricOf,
  issueOptions,
  methodOptions,
}