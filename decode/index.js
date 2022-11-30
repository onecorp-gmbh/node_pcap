// convert binary capture data into objects with friendly names

exports.EthernetPacket = require("./ethernet_packet");
exports.IPv4Packet = require("./ipv4");
exports.IPv6Packet = require("./ipv6");
exports.ArpPacket = require("./arp");
exports.PcapPacket = require("./pcap_packet");
var EthernetPacket = exports.EthernetPacket;
//var PcapPacket = exports.PcapPacket;

function decode(packet, emitter, options) {
    return new EthernetPacket(emitter).decode(packet, 0);
    // Parse as EthernetPacket because we analyze with sFlow
    // and there is no pcap header present
    //
    // return new PcapPacket(emitter).decode(packet, options);
}

exports.decode = decode;
exports.decode.packet = decode;
