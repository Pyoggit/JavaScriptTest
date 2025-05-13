function solution(Members, Logs) {
    const alarmCount = {};
    const alarmSetting = {};
    const articleInfo = {};
    const commentInfo = {};
    const commentMap = {};
    const subCommentMap = {};

    for (const m of Members) {
        alarmCount[m] = 0;
        alarmSetting[m] = { article: true, comment: true };
    }

    for (const log of Logs) {
        const [user, action, ...rest] = log;

        if (action === "ALARM") {
            const type = rest[0].toLowerCase();
            alarmSetting[user][type] = !alarmSetting[user][type];
        }

        else if (action === "ARTICLE") {
            const articleId = rest[0];
            articleInfo[articleId] = {
                author: user,
                comments: 0,
                popular: false,
                participants: new Set()
            };
        }

        else if (action === "COMMENT") {
            const [commentId, articleId] = rest;
            commentInfo[commentId] = { author: user, articleId };
            if (!commentMap[articleId]) commentMap[articleId] = new Set();
            commentMap[articleId].add(user);

            const info = articleInfo[articleId];
            info.comments++;
            if (info.comments >= 5) info.popular = true;

            const receivers = new Set();
            receivers.add(info.author);
            for (const participant of commentMap[articleId]) {
                receivers.add(participant);
            }

            receivers.delete(user);

            for (const r of receivers) {
                if (info.popular || alarmSetting[r].comment) {
                    alarmCount[r]++;
                }
            }
        }

        else if (action === "SUB_COMMENT") {
            const [subCommentId, commentId] = rest;
            const comment = commentInfo[commentId];
            const articleId = comment.articleId;

            if (!subCommentMap[commentId]) subCommentMap[commentId] = new Set();
            subCommentMap[commentId].add(user);
            articleInfo[articleId].comments++;
            if (articleInfo[articleId].comments >= 5) articleInfo[articleId].popular = true;

            const receivers = new Set();
            receivers.add(comment.author);
            for (const p of subCommentMap[commentId]) {
                receivers.add(p);
            }

            receivers.delete(user);

            for (const r of receivers) {
                if (articleInfo[articleId].popular || alarmSetting[r].comment) {
                    alarmCount[r]++;
                }
            }
        }
    }

    return Members.map(m => alarmCount[m]);
}
