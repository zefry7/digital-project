
function Loading() {
    return <div className={"h-svh"}>
        <div className={"h-full flex items-center justify-center gap-[20px]"}>
            <div className={"circle-loader animate-[up-move_0.7s_linear_infinite]"}></div>
            <div className={"circle-loader animate-[up-move_0.7s_linear_0.1s_infinite]"}></div>
            <div className={"circle-loader animate-[up-move_0.7s_linear_0.2s_infinite]"}></div>
        </div>
    </div>
}

export default Loading;