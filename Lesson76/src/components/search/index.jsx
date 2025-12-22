function Search(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchTerm(e.target.searchInput.value)
  }

  return (
    <form className="relative"
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        className="border border-gray-500 shadow-lg rounded-md p-[10px_30px] pl-[50px] outline-0 mb-4"
      />
      <button
        type="submit"
        className="absolute left-3 top-[10px] text-gray-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
      </button>
    </form>
  )
}

export default Search