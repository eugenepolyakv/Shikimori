import React from 'react';
import styles from '../AnimePage.module.css';
const AnimeMainCharacters = ({ characters, isLoading }) => {
    // const charactersArr = characters
    //     ? characters.data
    //           .filter((el) => el.role === 'Main')
    //           .map((el) => (
    //               <div>
    //                   <img src={el.character.images.jpg.image_url} />
    //                   <div>{el.character.name}</div>
    //               </div>
    //           ))
    //     : null;
    const charactersArr = characters
        ? characters.data.filter((el) => el.role === 'Main')
        : [];

    const charactersArrOfFiveItems = [];
    let helpArr = [];
    for (let i = 0; i < charactersArr.length; i++) {
        helpArr.push(charactersArr[i]);
        if (helpArr.length == 5 || i == charactersArr.length - 1) {
            charactersArrOfFiveItems.push(helpArr);
            helpArr = [];
        }
    }

    return (
        <div className={styles.div5}>
            <div className={styles.title}>Main characters</div>
            <div>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                {/* {charactersArr} */}
                {charactersArr.length > 0
                    ? charactersArrOfFiveItems.map((arr) => (
                          <div className={styles.mainCharacters}>
                              {arr.map((el) => (
                                  <div className={styles.characterCard}>
                                      <img
                                          src={
                                              el.character.images.jpg.image_url
                                          }
                                          style={{ width: '100%' }}
                                      />
                                      <div className={styles.nameOfACharacter}>
                                          {el.character.name}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ))
                    : null}
                {/* {charactersArrOfFiveItems.map((el) => el)} */}
                {/* <div>
                    <img src="https://cdn.myanimelist.net/images/characters/9/69275.jpg?s=36c4ad9f4440d77918c34c49870e719c" />
                    <div>Haruno, Sakura</div>
                </div>
                <div>
                    <img src="https://cdn.myanimelist.net/images/characters/7/284129.jpg?s=b0a6b941fd427cbfd85657f316c0e309" />
                    <div>Hatake, Kakashi</div>
                </div> */}
            </div>
        </div>
    );
};

export default AnimeMainCharacters;
