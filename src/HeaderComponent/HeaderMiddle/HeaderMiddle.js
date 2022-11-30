import './HeaderMiddle.css';
import {TfiSearch , TfiViewGrid, TfiBag, TfiAngleRight} from "react-icons/tfi";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {useEffect, useState, useRef} from 'react';
import ListType from './ListType';
import Wrapper  from './Wrapper';
const HeaderMiddle = ({setShowLogin,showLogin})=>{

    const [searchResult, setSearchResult] = useState(false)
    const [query,setQuery] = useState('')
    const [searchHistory,setSearchHistory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/link')
        .then(res=>res.json())
        .then(data=>setSearchHistory(data))
    },[])
    const refInput = useRef(null)
    
    const clickOutside = ()=>{
        setSearchResult(false)
    }

   
    useEffect(()=>{
        const handleClickOutside = (e)=>{
            if(refInput.current){
                clickOutside()
            }
        }
        document.addEventListener('click',handleClickOutside,true)
        return document.removeEventListener('click',handleClickOutside,false)
    },[])

    const onChange = (event)=>{
        setQuery(event.target.value)
    }
    return(
        <div className="header-middle container">
            <div className='header-middle-logo-container'>

            <a href="" className='header-middle-logo'><span>Sendo</span></a>
            </div>

            <Tippy 
            placement='bottom'
            interactive
            render={attrs => (
                <div className="box-type-list">
                <Wrapper  tabIndex="-1" {...attrs}>
                    <ul className='header-middle-list-type'>
                        {
                            ListType.map((type)=>{
                                return(
                                    <div className='header-middle-item-box'>
                                    <li className='header-middle-item-type'>{type.type}
                                    
                                    </li>
                                    <TfiAngleRight className='header-middle-item-detail'/>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </Wrapper>
                </div>
    )}>
            <div className='header-middle-list-menu'><TfiViewGrid className='header-middle-list-menu-icon'/></div>
            </Tippy>
            {/* <Tippy
            interactive
            // visible = {searchResult.length>0}
            render={attrs => (
                <div className='header-middle-search-bar'>
      <Wrapper  tabIndex="-1" {...attrs}>

               <ul className='header-middle-search-list'>
                <li className='header-middle-search-item'>Đồng hồ Nam</li>
                <li className='header-middle-search-item'>Giày cao gót nữ</li>
                <li className='header-middle-search-item'>Quần áo nam</li>
                <li className='header-middle-search-item'>Quần áo nữ</li>
                <li className='header-middle-search-item'>Bàn trang điểm</li>
                <li className='header-middle-search-item'>Tất trẻ em</li>
               </ul>
      </Wrapper>
      </div>
    )}> 

            
</Tippy> */}
            <div className='header-middle-search-bar'>

            <input value={query} className='header-middle-input' type="text" placeholder="Tìm kiếm trên Sendo" onClick={()=>setSearchResult(!searchResult)} onChange={onChange}/>
            {searchResult &&
            <div className='header-middle-search-history' ref={refInput}>
                <h3 className='header-middle-search-history-title'>Xu hướng tìm kiếm</h3>
                <ul className='header-middle-search-history-list'>
                    {/* <li className='header-middle-search-history-item'>
                        <a href="">Quần áo</a>
                    </li>
                    <li className='header-middle-search-history-item'>
                        <a href="">Kem dưỡng da</a>
                    </li>
                    <li className='header-middle-search-history-item'>
                        <a href="">Bàn ghế </a>
                    </li> */}

                    {searchHistory.filter(item=>{
                        if(query==='')
                        return searchHistory
                        const searchTerm= query.toLowerCase()
                        const fullname = item.name.toLowerCase()
                        
                        return searchTerm && fullname.startsWith(searchTerm)
                    })
                    .map((item,index)=>(
                        <li key={index} className='header-middle-search-history-item'>
                            <a href={item.deeplink}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>}
            </div>


            <div className='header-middle-search-btn'>

            <button className='header-middle-search'><TfiSearch className='header-middle-search-icon'/></button>
            </div>
            
            <a href="" className='header-middle-bag'><TfiBag className='header-middle-bag-icon' /></a>
            <button className='header-middle-button-signup'
            onClick={()=>{
                setShowLogin(!showLogin)
            }}
            >Đăng nhập</button>
        </div>
    )
}

export default HeaderMiddle;