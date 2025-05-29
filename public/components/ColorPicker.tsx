export default function ColorPicker() {
    return (
         <div className="sidepanel bg-color5 d-flex flex-column gap-5">
            <span className="d-flex align-items-center justify-content-center bg-color5">
                <i className="far fa-cog fa-spin"></i>
            </span>
            <div className="sidepanel-box d-flex flex-column align-items-start gap-4">
                <h6 className="mb-0 fw-normal">Choose Your Color</h6>
                <div className="color-picker d-flex flex-wrap align-items-start w-100 gap-2">
                    <a className="scheme1-color applied" href="#" title=""></a>
                    <a className="scheme2-color" href="#" title=""></a>
                    <a className="scheme3-color" href="#" title=""></a>
                    <a className="scheme4-color" href="#" title=""></a>
                    <a className="scheme5-color" href="#" title=""></a>
                </div>
            </div>
        </div>
    )
}