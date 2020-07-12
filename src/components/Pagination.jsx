import React from "react"

class Pagination extends React.Component {

	render() {
		const {currPage, total_pages, changePage} = this.props;

		const handleChangePage = value => {
			return event => {
				changePage(value);
			};	
		};
		return (
			<div className="pagination">
				<input type="button" className="pagination-item" onClick={currPage > 1 ? handleChangePage(currPage-1) : null} value={"Prev"}/>
				<input type="button" className="pagination-item currPage" value={currPage}/>
				<input type="button" className="pagination-item" onClick={handleChangePage(currPage+1)} value={currPage+1}/>
				<input type="button" className="pagination-item" onClick={handleChangePage(currPage+2)} value={currPage+2}/>
				<input type="button" className="pagination-item" value={"..."}/>
				<input type="button" className="pagination-item" onClick={handleChangePage(total_pages)} value={total_pages}/>
				<input type="button" className="pagination-item"  onClick={currPage < total_pages ? handleChangePage(currPage+1) : null} value={"Next"}/>
			</div>
			);
	}
}



export default Pagination
