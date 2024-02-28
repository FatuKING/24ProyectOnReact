const now = new Date()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()
const dates = now.getDate()
const numMonth = now.getMonth()
const numDay = now.getDay()
const hoursForClock = hours >= 13 ? hours % 12 : hours
const ampm = hours >= 12 ? 'PM' : 'AM'

const days = (n) => {
  const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return day[n - 1]
}

const months = (n) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return month[n]
}

export const date = `${days(numDay)}, ${months(numMonth)} ${dates}`

export const timeNow = () => {
  return `${hoursForClock}:${minutes} ${ampm}`
}
