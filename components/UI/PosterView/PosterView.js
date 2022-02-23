const PosterView =(props) => {
    const loopComp = (comp,digit) =>{
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp) 
        }
        return thumbnails;
    }
    return(
        <div className="poster-view-list">
        <h3 className="poster-view-list__title">Movies</h3>
        <div className="poster-view-list__thumbnails">
        {loopComp(
            (<div className="poster-view-list__thumbnail">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg"/>
                <div className="poster-view-list__top-layer">
                <i className="fas fa-play"/>
                </div>
            </div>),10

        )}
            </div>
        </div>
)
}

export default PosterView; 