import React, { useEffect, useState } from 'react';
import './steamMiniProfileCSS/shared_global.css'

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
          setMiniProfileHTML(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Steam mini profile:', error);
      }
    };

    fetchMiniProfile();
  }, [accountId]);

  return (
    <div dangerouslySetInnerHTML={{ __html: miniProfileHTML }} />
  );
};

export default SteamMiniProfile;
