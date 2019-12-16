const contentTarget = document.querySelector('.attractionsDropdown')

const AttractionsSelect = () => {
  const render = attractionsCollection => {
    contentTarget.innerHTML = `
            <select class="dropDown" id="attractionsSelect">
    <option>attractions</option>
            </select>
        `
  }

  render()
}

export default AttractionsSelect
