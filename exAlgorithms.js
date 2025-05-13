function solution(n, p, S) {
    let answer = '';

    for (let i = 1; i <= n; i++) {
        if (n % i !== 0) {
            answer += '0';
            continue;
        }

        let isValid = false;
        // i명의 사람이 남았을 때 그룹은 (n / i)개
        for (let offset = 0; offset < i; offset++) {
            let ok = true;
            for (let j = offset; j < n; j += i) {
                let a = S[j];
                let b = S[(j + p * i) % n];
                if (b === undefined) continue;
                if (a !== b) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                isValid = true;
                break;
            }
        }
        answer += isValid ? '1' : '0';
    }

    return answer;
}
