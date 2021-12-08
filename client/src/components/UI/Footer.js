
const Footer=(props)=>{
    const style={
        "backgroundColor": "rgb(0, 0, 0)"
    };
    return (
			<footer className="text-white p-3 text-center" style={style}>
				<div>
					Made with{" "}
					<i className="fas fa-heart" style={{ color: "red" }}></i> by
					Baahubali7781
					<p>
						<del>Copyright 2021</del> Feel free to Copy!
					</p>
				</div>
			</footer>
    );
}

export default Footer;