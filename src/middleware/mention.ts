import { Composer, Raw } from "tgsnake"

export const mention = new Composer()

mention.command(['help', 'start'], async ctx => {
    ctx.message.reply(`Este es un bot de nicho, cuya única función es avisarte si tu userbot envió algún archivo al grupo donde lo hayas agregado™\n\nEs de <a href="https://github.com/M4ss1ck/self-mention-bot">código abierto</a>.`, {
        disableWebPagePreview: true,
        parseMode: 'html'
    })
})

mention.on(['msg.document', 'msg.audio', 'msg.photo', 'msg.video'], async ctx => {
    if (ctx.message.chat?.id && ctx.message.from?.id) {
        const users = await ctx.api?.getParticipants(ctx.message.chat.id)
        if (users && 'users' in users) {
            const toMention = users.users?.filter(u => u instanceof Raw.User && !u.self && !u.deleted && !u.bot)
            const msgAmount = Math.ceil(toMention.length / 3)
            for (let i = 0; i < msgAmount; i++) {
                let msg = '<i>nuevo archivo encontrado...</i> '
                let user1 = toMention[i * 3] as Raw.User
                let user2 = toMention[1 + i * 3] as Raw.User
                let user3 = toMention[2 + i * 3] as Raw.User
                if (user1) msg += ` <a href="tg://user?id=${user1.id.toString()}">${user1.firstName ? user1.firstName : user1.id.toString()}</a>`
                if (user2) msg += ` <a href="tg://user?id=${user2.id.toString()}">${user2.firstName ? user2.firstName : user2.id.toString()}</a>`
                if (user3) msg += ` <a href="tg://user?id=${user3.id.toString()}">${user3.firstName ? user3.firstName : user3.id.toString()}</a>`
                ctx.msg?.reply(msg, {
                    parseMode: 'html',
                })
            }
        }
    }
})