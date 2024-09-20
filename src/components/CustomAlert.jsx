export default function CustomAlert({alertType,alertMessage})
{
    return (
        <div className={`alert alert-${alertType}`}>
            <div>{alertMessage}</div>
        </div>
    );
}