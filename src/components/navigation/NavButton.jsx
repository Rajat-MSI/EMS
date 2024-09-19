export default function NavButton({method, text}) {
    return (
        <>
            <button className="btn border-0"  onClick={method}><i className={text}></i></button>
        </>
    );
}