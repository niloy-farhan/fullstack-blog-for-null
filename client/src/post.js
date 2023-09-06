export default function Post() {
    return(
        <div className="post">
            <div className={"image"}>
                <img src="https://techcrunch.com/wp-content/uploads/2023/08/newsroom-robert-noyce-bldg-2.jpg.rendition.intel_.web_.1920.1080.jpg?w=730&crop=1"/>
            </div>
            <div className={"texts"}>
                <h2>The Origin Of Programming</h2>
                <p className={"info"}>
                    <a className={"author"}>Null</a>
                    <time>2023-09-05 8:56</time>
                </p>
                <p className={"summary"}>The story begins in 1843. Yeah seems a little too early. When the algorithm for the Analytical Engine was developed by Ada Lovelace </p>
            </div>
        </div>
    );
}