function randomPassword(num){
    let password = ""
    const possibleChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, !, @, #, $, %]
    for (let i = 0;i < num; i++){
        const randomNum = Math.floor(Math.random() * possibleChars.length)

    }
    return password
}

// charat