import "../../../../../style/main/table/index.scss";

const ModalItems = () => {
    return (
        <table className='modal-payments'>
            <tr className='modal-payments__row gray'>
                <th>To`lov vaqti</th>
                <th>To‘lov summasi</th>
                <th>To‘lov usuli</th>
                <th>To‘lov holati</th>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.06.2023</td>
                <td className='green'>600 000 so’m</td>
                <td>Payme</td>
                <td className='green' style={{ paddingLeft: "14px" }}>
                    To‘langan
                </td>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.07.2023</td>
                <td className='green'>600 000 so’m</td>
                <td>Payme</td>
                <td className='green' style={{ paddingLeft: "14px" }}>
                    To‘langan
                </td>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.08.2023</td>
                <td className='green'>600 000 so’m</td>
                <td>Payme</td>
                <td className='green' style={{ paddingLeft: "14px" }}>
                    To‘langan
                </td>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.09.2023</td>
                <td className='red'>600 000 so’m</td>
                <td className='red'> - </td>
                <td className='red' style={{ transform: "translateX(60px)" }}>
                    Qarzdorlik
                </td>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.10.2023</td>
                <td>600 000 so’m</td>
                <td> - </td>
                <td style={{ transform: "translateX(60px)" }}>To‘lanmagan</td>
            </tr>
            <tr className='modal-payments__row'>
                <td>20.10.2023</td>
                <td>600 000 so’m</td>
                <td> - </td>
                <td style={{ transform: "translateX(60px)" }}>To‘lanmagan</td>
            </tr>
        </table>
    );
};

export default ModalItems;
