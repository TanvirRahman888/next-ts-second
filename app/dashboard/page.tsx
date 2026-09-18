import Counter from "../components/Counter";

const DashBoardPage = () => {
    console.log("Render from DashBoardPage");
    return (
        <div className="container mx-auto">
            <h1>DashBoardPage</h1>
            <Counter/>
        </div>
    );
};

export default DashBoardPage;