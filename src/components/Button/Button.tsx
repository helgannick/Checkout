import classNames from "classnames";

type Props ={
    type?: string;
    variant?: 'default' | 'dark' | 'primary' | 'light';
    children: React.ReactNode;
};

export function Button({ type='button', variant, children}: Props ){
    let bgColor = 'text-black';
    if(variant === 'dark') bgColor = 'bg-primaryDark text-white';
    if(variant === 'primary')
        bgColor =
            'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
    if(variant === 'light') bgColor = 'bg-primaryLight text-white';

    return(
        <button className={classNames(' py-2 px-4 rounded-nd font-bold bg-primaryDark rounded-md text-white ' , bgColor)}>
            Enviar
        </button>
    )
}