export default function PageTitle({pageTitle})
{
    return (
        <div>
            <hr className="my-1"/>
            <div className="h5 text-center">{pageTitle}</div>
            <hr className="my-1"/>
        </div>
    );
}