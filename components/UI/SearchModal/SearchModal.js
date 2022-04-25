import { useStateContext } from "../../HBOProvider";

const SearchModal = (props) => {
    const globalState = useStateContext();

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 1; index <= digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (

        <div
			className={`search-modal ${
				globalState.searchOpen ? "search-modal--active" : ""
			}`}>
			<div className="search-modal__input-group ">
				<input
					className="search-modal__input"
					type="text"
					placeholder="search for a title"
					// onChange={handleInput}
					// value={text}
				/>
				<div
					className="search-modal__close-btn"
					onClick={() =>
						globalState.setSearchOpenAction(!globalState.searchOpen)
					}>
					<i className="fa fa-times" />
				</div>
			</div>

            <h3 className="search-modal__title">
                Popular Searches
       </h3>

            <div className="search-modal__thumbnails">
                {loopComp(
                    (<div className="search-modal__thumbnail">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg" />
                        <div className="search-modal__top-layer">
                            <i className="fa fa-play" />
                        </div>
                    </div>), 10

                )}
            </div>
        </div>
    )
}

export default SearchModal; 