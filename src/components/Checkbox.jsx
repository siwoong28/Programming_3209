export default function checkbox(props) {
    const { children, id, ...rest } = props;

    return (
        <>
            <input type="checkbox" className='todo__check' id={`chk-${id}`} {...rest} />
            <label htmlFor={`chk-${id}`} className='todo__label'>{children}</label>
        </>
    )
}