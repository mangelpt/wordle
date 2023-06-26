import  {useEffect} from "react";

export const Keyboard = () => {
    const keys: string[] = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M'
    ];


    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const handleKeyDown = (e: any) => {
        console.log("here")
        console.log(e)
   /*     if (e.code === "Enter") {
            triggerBusqueda(e.target.value);
        }*/
    };

    return (
        <div>
            {keys.map((key) => (
                <button tabIndex={0} key={key} onClick={() => handleKeyDown(key)}>
                    {key}
                </button>
            ))}
        </div>
    );
};


