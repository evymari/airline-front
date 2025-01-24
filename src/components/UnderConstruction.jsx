const UnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-backgroundGray">
            <img
                src="/images/construction2.webp"
                alt="Illustration of a woman in a construction helmet, holding a suitcase, suggesting she is working on a construction project"
                className="w-[200px] h-[200px] mb-4 rounded-full"
            />
            <h1 className="mb-2 text-3xl font-bold text-primaryBlue">Page Under Construction</h1>
            <p className="text-sm text-accentBlack">We are working hard to bring you this page soon. Please check back later!</p>
        </div>
    );
};

export default UnderConstruction;