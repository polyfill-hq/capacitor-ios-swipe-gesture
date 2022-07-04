import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(iOSSwipeGesturePlugin)
public class iOSSwipeGesturePlugin: CAPPlugin {
    @objc func enable(_ call: CAPPluginCall) {
        self.bridge?.webView?.allowsBackForwardNavigationGestures = true
        call.resolve()
    }

    @objc func disable(_ call: CAPPluginCall) {
        self.bridge?.webView?.allowsBackForwardNavigationGestures = false
        call.resolve()
    }
}
