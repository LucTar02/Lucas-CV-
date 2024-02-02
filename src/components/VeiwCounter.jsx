import { useSelector } from "react-redux";

function ViewCounter() {
    const counter = useSelector((state) => { return state.counter });

    return (
        <div className="räknare">
        <p>CVt Har { counter } Poäng</p>
        </div>
    )
}

export default ViewCounter;