import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
	return (
		<div className="bg-[#273238] flex flex-col max-h-[300px] overflow-y-auto    mt-4 rounded-[10px] w-[21rem] no-scrollbar fixed ">
			{results.map((result, id) => {
				return <SearchResult results={result.teamName} key={id} />;
			})}
		</div>
	);
};

export default SearchResultsList;
