import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
// import reactPaginator from 'react-paginator';
import "./main.css"
// import DetailEyes from "../../images/eyes.png"
import DetailPage from '../../Pages/DeatilPage/DetailPage';

import DetailEyes from "../../images/eyes.png"
import { Link } from 'react-router-dom';
// Example items, to simulate fetching from another resources.

export default function Paginator(props){

    const {data} = props;
    
    const [currentItems, setCurrentItens] = useState(['']);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =15;

    useEffect(()=> {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItens(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
        // setPageCount(Math)
        // currentItems = items.slice(itemOffset, endOffset);
    },[itemOffset, itemsPerPage,data])
        
        
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const returnCidade = (val , index) =>{
    return(
      <>
      <tr key={index}>
        
        {/* <td>{val['CD_CON_PAG']}</td> */}
        <td>{val['NR_DOCUMENTO']}</td>
        <td>{val['NM_FORNECEDOR']}</td>
        <td>{val['DESCRICAO']}</td>
        {/* <td>{val['PARCELA']}</td>
        <td>{val['SETOR']}</td>
      <td>{val['CONTACUSTO']}</td> */}
      <td>{val['DT_PAGAMENTO']}</td>
        <td>R$ {val['VL_PAGO']}</td>
        
        <td><Link to={`Detalhes/170339/126136`}><img src={DetailEyes} className='detail'/></Link></td>
      </tr>
      </>
    )
  }

  return (
    <>
    <tbody>
      
        {currentItems > [''] && currentItems.map(returnCidade) }
    </tbody>

    <div className="paginator">
    <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName = "pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName='active'
        />
        
    </div>
    </>
  );
}