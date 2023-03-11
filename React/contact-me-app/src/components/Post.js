const names = ['Boyan', 'Stambeto'];
const message = ['Moshten Coder!!!', 'Moshtnoo zobcheeee!!!!'];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    const chosenMsg = Math.random() > 0.5 ? message[0] : message[1];

    return (
        <div>
            <p>{chosenName}</p>
            <p>{chosenMsg}</p>
        </div>
    );
}

export default Post;
