export function filterUsers(users, filter) {
    const lowerCaseFilter = filter.toLowerCase()
  
    return users.filter((user) => {
      const lowerCaseName = user.name.toLowerCase()
      const lowerCaseEmail = user.email.toLowerCase()
  
      return lowerCaseName.includes(lowerCaseFilter) || lowerCaseEmail.includes(lowerCaseFilter)
    })
  }