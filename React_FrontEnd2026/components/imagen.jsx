function Img({ fileName }) {
    const ruta = `../src/assets/img/${fileName}`;
    return (
        <img src={ruta} alt={fileName} />
    );
};

export default Img;