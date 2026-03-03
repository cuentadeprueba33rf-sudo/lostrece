
export interface RobloxUser {
  id: number;
  name: string;
  displayName: string;
}

export interface RobloxAvatar {
  targetId: number;
  state: string;
  imageUrl: string;
}

const ROBLOX_USERS_API = 'https://users.roblox.com/v1';
const ROBLOX_THUMBNAILS_API = 'https://thumbnails.roblox.com/v1';

/**
 * Fetches Roblox user info by username.
 */
export async function getRobloxUserByUsername(username: string): Promise<RobloxUser | null> {
  try {
    const response = await fetch(`${ROBLOX_USERS_API}/usernames/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usernames: [username],
        excludeBannedUsers: true,
      }),
    });

    if (!response.ok) return null;

    const data = await response.json();
    if (data.data && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching Roblox user:', error);
    return null;
  }
}

/**
 * Fetches Roblox user avatar by userId.
 */
export async function getRobloxUserAvatar(userId: number): Promise<string | null> {
  try {
    const response = await fetch(
      `${ROBLOX_THUMBNAILS_API}/users/avatar?userIds=${userId}&size=420x420&format=Png&isCircular=false`
    );

    if (!response.ok) return null;

    const data = await response.json();
    if (data.data && data.data.length > 0) {
      return data.data[0].imageUrl;
    }
    return null;
  } catch (error) {
    console.error('Error fetching Roblox avatar:', error);
    return null;
  }
}
