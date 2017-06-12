import React from 'react';
import { Card } from './card.js';

const stringContains = (s1, s2) => (s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1);

const Cards = (props) => {
    const filteredProfiles = props.profiles
      .filter((profile) => {
        if (props.selectedType === 'all') return true;
        return profile.type === props.selectedType
      })
      .filter((profile) => stringContains(profile.title, props.searchText) || stringContains(profile.content, props.searchText))
      .map(({title, content, imageUrl, link, id}, index) => {
        return <Card key={title} id={id} title={title} content={content} imageUrl={imageUrl} link={link} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />;
      });

    return (
      <div className="sets" >
        { filteredProfiles }
      </div>
    );
}

export {Cards}
