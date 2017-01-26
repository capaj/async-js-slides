async function checkOfflineState () {

    await checkOnlineState()

    await checkStartChatSession()

    await checkSendMessageFromCustomer()

    await checkSendMessageFromAgent()

    await checkCloseChatByCustomer()
});