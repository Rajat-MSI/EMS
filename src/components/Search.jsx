export default function Search()
{
    return (
        <div className="col-lg-6 offset-lg-3 p-2">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control shadow-none"
                    name="search"
                    placeholder="Search for employees"
                />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success rounded-start-0"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    );
}