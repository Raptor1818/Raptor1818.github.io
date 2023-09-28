import React, { useEffect, useState } from 'react';
import './steamMiniProfileCSS/shared_global.css';

const SteamMiniProfile = ({ accountId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [miniProfileHTML, setMiniProfileHTML] = useState('');

  useEffect(() => {
    const fetchMiniProfile = async () => {
      const corsHost = 'https://steam-miniprofile-cors.glitch.me/';
      const steamId = accountId || '76561198995572767';

      try {
        const response = await fetch(
          `${corsHost}https%3A%2F%2Fsteamcommunity.com%2Fminiprofile%2F${steamId}`
        );
        const data = await response.text();

        if (data && data.length !== 0) {
          // Remove spans and divs with specific classes
          let modifiedData = removeSpanWithClass(data, 'friend_status_offline');
          modifiedData = removeDivWithClass(modifiedData, 'xp');
          modifiedData = removeSpanWithClass(data, 'friend_status_online');
          // Add more calls for other classes as needed

          setMiniProfileHTML(modifiedData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Steam mini profile:', error);
      }
    };

    fetchMiniProfile();
  }, [accountId]);

  const removeSpanWithClass = (data, className) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const spansToRemove = doc.querySelectorAll(`span.${className}`);

    spansToRemove.forEach((spanToRemove) => {
      spanToRemove.remove();
    });

    return doc.documentElement.innerHTML;
  };

  const removeDivWithClass = (data, className) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const divsToRemove = doc.querySelectorAll(`div.${className}`);

    divsToRemove.forEach((divToRemove) => {
      divToRemove.remove();
    });

    return doc.documentElement.innerHTML;
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: miniProfileHTML }} />
  );
};

export default SteamMiniProfile;
