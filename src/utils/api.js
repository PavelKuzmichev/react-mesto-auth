const onError = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};
export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    addAllCards() {
        return fetch(`${this._url}/cards/`, { headers: this._headers }).then(onError);
    }
    addCard(data) {
        return fetch(`${this._url}/cards/`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
                id: data.id,
            }),
        }).then(onError);
    }
    removeCard(data) {
        return fetch(`${this._url}/cards/${data}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(onError);
    }
    changeLikeCardStatus(data, isLiked) {
        return fetch(`${this._url}/cards/likes/${data}`, {
          method: `${isLiked ? 'DELETE' : 'PUT'}`,
          headers: this._headers,
        }).then(onError);
    }
    likeCard(data) {
        return fetch(`${this._url}/cards/likes/${data}`, {
         method: 'PUT' ,
            headers: this._headers,
        }).then(onError);
    }
    disLikeCard(data) {
        return fetch(`${this._url}/cards/likes/${data}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(onError);
    }
    addProfileInfo() {
        return fetch(`${this._url}/users/me/`, { headers: this._headers }).then(onError);
    }

    editProfileInfo(data) {
        return fetch(`${this._url}/users/me/`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then(onError);
    }
    editAvatarIcon(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then(onError);
    }
}
export const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-20",
    headers: {
        authorization: "4b4ac9ed-5313-4881-afac-1a610d770d12",
        "Content-Type": "application/json",
    },
});


