import React from 'react';
import {ItemSet} from './itemset.orig.js';
const SIZE = 4;

const getSetsStyles = () => { return { width: (200 * SIZE + 10) + "px" }; };
const stringContains = (s1, s2) => (s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1);

const Cards = (props) => {
    const filteredProfiles = props.profiles
      .filter((profile) => {
        if (props.selectedType === 'all') return true;
        return profile.type === props.selectedType
      })
      .filter((profile) => stringContains(profile.title, props.searchText) || stringContains(profile.content, props.searchText))
      .map(({title, content, imageUrl, link}, index) => {
        return <ItemSet key={title} id={index} title={title} content={content} imageUrl={imageUrl} link={link} />;
      });

    return (
      <div className="sets" >
        { filteredProfiles }
      </div>
    );
}

export {Cards}
