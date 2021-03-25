import React, { useRef,memo } from 'react';
import Styles from './search_video.module.css';

const SearchVideo = memo(
    ({onSearch}) => {
        const inputRef = useRef();
    
        const onClick = () => {
            onSearch(inputRef.current.value)
        }
        
        const onKeyPress = (event) => {
            if(event.key==='Enter'){
                onSearch(inputRef.current.value)
            }
        }
        
                return (
                    <div className={Styles.searchVideo}>
                        <i className={`fab fa-youtube ${Styles.youtubeIco}`}></i>
                        <h2 className={Styles.logo}>Youtube</h2>
                        <input 
                            ref={inputRef}
                            className={Styles.input}
                            type="search"
                            placeholder="Search..."
                            onKeyPress={onKeyPress}
                        />
                        <button
                            onClick={onClick}
                            className={Styles.button}>
                        <i className={`fas fa-search ${Styles.searchIco}`}></i>
                        </button>
                    </div>
                )
    }

)



export default SearchVideo;