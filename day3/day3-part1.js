const puzzleInput = [
  { input: "rGnRRccfcCRFDPqNWdwWJWRBdB" },
  { input: "jZzVVSZSjmQvZTSZfjmLzNPJqWtJBwqpNtBpdWdNvd" },
  { input: "fZfjlMLVshMFhcHnDG" },
  { input: "vJRmRfJbfRfJsCpvgLggNVsv" },
  { input: "zlzSrMPZMgBFFMNMVWsjsF" },
  { input: "dzBSBlzdcggRGdndnn" },
  { input: "hNwqVDVDdmQwQPrbDMSSMRSWSM" },
  { input: "LvnzJJtlcHstlffCVpMSbRMpBMbCgVWM" },
  { input: "lGvvscLHcfsHtvlsnZmmNGhNFVQqqTdqFd" },
  { input: "sHGzGsfcZnHfhbLRFrdrhRFf" },
  { input: "vwVqzSSjSSttjSqgNMqwzSSVCCgRPhPhFLdCRLLrdCRRrDLb" },
  { input: "vvwwtvvVwSvMQzjvmNtJsHBnsZllmnnTBBcBlTnW" },
  { input: "pzNVBVplhfLfVfVStZrZHbQHZQTb" },
  { input: "sdPPJdCjbdQHMTWt" },
  { input: "ngmJGFjJwJCmGcnJcFtgwcDBNLlqfBpvfBpqllhlfL" },
  { input: "TGpphMZhJQpGLZTMCCtsBMCSDsStBFcB" },
  { input: "jdfgHClHrdrbWvWgjqmctSDqltDsFFDFBc" },
  { input: "dNWWvfgCLzzNNLZz" },
  { input: "vvHzBrTSvHFbqZqZTBBtzdVfGCGhJSfGJGDSdGMhVG" },
  { input: "lgmgslssslscsnRlVGWGWGVMRCll" },
  { input: "pQPsjwnNgQmnNNwQgNLNnmgZqvFqtwqtrMMzvzwFtrqTrr" },
  { input: "TNhNLTrswwsnFNrrGZVnJnZmVpSjjVDnPp" },
  { input: "dBlzzCBqgfWMBpPSJDHVZSVP" },
  { input: "cqzfpcdcNFFGrhcb" },
  { input: "LLpzCzSzJnLQVnTNhQ" },
  { input: "vtDqwBcRztQbthtV" },
  { input: "qZZZqZvvsZwwjvjDjspFlPpSSCslpzPlls" },
  { input: "rsZVlmStlFZllvmSSvLRqcGMswMMzjMsjqGCjzMG" },
  { input: "VTPgQBQdBCwgjCnJGC" },
  { input: "pBNTNHdbdWLrDVLbDmLZ" },
  { input: "CFmsmwnCRmjCjnCzJZQhhBGQBsMzbP" },
  { input: "WvltTWVDdNttdlDbbZzJvPJvBBhhzM" },
  { input: "gHDfTNlDDdgVNdglgfqtpcSFwccCmmwnRSwzzHHF" },
  { input: "hgmhWgCdzpjPCzFC" },
  { input: "NVfgffZblZQVNtFZPntPDrJjPt" },
  { input: "TwbQLLfMgdhswWGH" },
  { input: "JStSPHPJNrBCtBZMPtHTVfVwLcbbLTcSgfbVfn" },
  { input: "GdhhCplmdWbVddLV" },
  { input: "qpFvhQppFRlqmFGppRhqvvFzZtQMHZMzBNBCCzNDHHMPzB" },
  { input: "MvCMQmJCMDQjwMJCSJpQmDcnGBggfsgljGNslsNGjTHTNf" },
  { input: "HRPtRRzVWWFhrFdZhTGlTTLLggBLVgGGLf" },
  { input: "zZhdWZPWRdqttWWRPzRPmcpmpQqvvSCvwHwQmJqD" },
  { input: "NwrVVWrvwtQDRdRqWbqh" },
  { input: "jCCZjlJZZGclGPpCJlcCBhJshgqTsQgbDdshTbgLRh" },
  { input: "ppppflPZlpvfffFzHqFV" },
  { input: "VmTwGVwnwHnSnqGSVmBBwwmTZvzbCrsNWcsZsqFzCWsbWrNv" },
  { input: "JMPPgRDPDgghJggtzsMbZvsNCrWcNsbM" },
  { input: "DhgJllPPJcgJpptDDDPldpmTwjHBmSjBBwmBwHBdBmTQ" },
  { input: "vblvFHvrQTjqqhCpFwLnFL" },
  { input: "RDJRWsdRdgdWZMCMQSVppMJpVL" },
  { input: "DzsgRNNsftWdQmcvbPcfcBfj" },
  { input: "wTgbsTmgqSbzSlSvFb" },
  { input: "rNdDdZnRtJFlmVSHZz" },
  { input: "mfNjjmmdNWhWCsffwC" },
  { input: "LltBNFLHHcJcfNdNTwbbNsfW" },
  { input: "vQSMCzQSGdSdvjsTwmwfwWwV" },
  { input: "nRCSzMCQDqlgdlRJHJ" },
  { input: "vgqTGwnhpLFsVvrR" },
  { input: "ZZzTHlTlJNbcLfRtppFzfs" },
  { input: "PlWBWbjQjJgCDCMPTTGT" },
  { input: "wtBdWdDpjDdwScBtnsFsPmmnPbPHHPghhh" },
  { input: "fSSVGVzlTlqGfffLTQMGHsmFsbmPFbsPbhQZFhhs" },
  { input: "TzLzfqJTVRGvRMvqvLGzMqRfSvcDpNjcjdcwSDBDtBDvSCDj" },
  { input: "FrdCCzmqFrpDRTRHRLnQJJnr" },
  { input: "SGfNRWlBZlgtRltGbvnTVbJnSHvLHVbH" },
  { input: "NRWsfWBwwqwDMDpc" },
  { input: "vSfsmsdssdjSdZdSgRnmLRGNzgGnqwwB" },
  { input: "VrlThFPTPjHFDPRqGGnRnNLqqqHG" },
  { input: "lPtTDVCCDrjppfdSQbcJMsbftv" },
  { input: "RFFslstRRfSljtsRJPjRtRtngSHbmbbhGbHQQmgbmgGhGQ" },
  { input: "DqBZdWZvTdMBBTLDzqBhFnvgVhnHHFbnQVnGnb" },
  { input: "wcwMMMTzZwsjtCtjFN" },
  { input: "CsscSlwwZDscMNhhpZhRZHRM" },
  { input: "VjQvjbQvbhJVbvTbnQTnHHLrRFRqqFqFVdMHNHNH" },
  { input: "QbTjjbtJnvttntjgjJjPDwwsBsSsSlslhlwwPCBS" },
  { input: "RLjhhBBcNNBNhNjhpwScwSCTFwcFvMwvlc" },
  { input: "dJqPJqbqtmgmgdPrdgwvDTCSSlMSFDlFTzFg" },
  { input: "stCCqmbGrrbmPsqZhHhpjjNhfjBnnsnp" },
  { input: "LfDzcMMVsDLLzNscGhFFcQhlhhBRll" },
  { input: "ZCbSbwdmwPnPnPmHjdjWFWsWhdGjdH" },
  { input: "bZnPbvnvqCvJDrLJNssf" },
  { input: "bbldQHVltHQSSJJmTlwJGjCjCChchgMhHhprCpMv" },
  { input: "WNPDFfqfzFsBFFnmgjGhgccjpcpgMGrs" },
  { input: "mZFFzDnmzBBZltdlZSVtZS" },
  { input: "hdJZZdJTvnJmRphvvpGnwvqzVFSwVlHVlFHFHNlzlgFgHF" },
  { input: "QWWWBbrCCrtjQsMdcWMBfttHsgFHVHgFSNzDzFlVLggHzz" },
  { input: "jQdBPCtrtcPcMQCTnqnhTvPGGvnJGR" },
  { input: "ZhsmsbNVmFssmblMMpdvvQdwLQRppRvQ" },
  { input: "GjnNNGNCGjfJcqrQDvQQpvQLPpnQQw" },
  { input: "BJjWqWSCrNHrqjfhlHzlVbVtFmtHTV" },
  { input: "mtJmPmQBbPFshnJzZpLZ" },
  { input: "gMqMHRGrCHSvrRGrqPZLnplFzlVhFspL" },
  { input: "RrDrgMGRDPNtfmDN" },
  { input: "wqqvqVmlpqchqrDD" },
  { input: "gzRltSjgFlWshrdngrpPcDcd" },
  { input: "RRjtsbGfGLbsLWSLtjzGSHNNHmHBwNNHNmNfllwVfl" },
  { input: "mqFBQgnMQQbJqnTswSMNWGsDswZZ" },
  { input: "HgzlRzHccfHsfTwSWfNSNf" },
  { input: "VLldvpHLVHrFJFJgpnQbJn" },
  { input: "SzCJtLdDCCtqCcdDfZMVMfGVbsVZPPzz" },
  { input: "wpwWQWjQgwQgjNBwgHQgsGfPfbPsZPGSPjZmrPrV" },
  { input: "QFwpTwpHlnHFNFWQWlQgNwNLCddvDShtLJnSJCLqJJttDt" },
  { input: "HMgCVHggtqMMvjgNjNCMMwfWfPwWPJQQNzWwJzlQlQ" },
  { input: "bGFrqrFGZLLdFmSPcmPzQJlQcWzJmJ" },
  { input: "hRphhShnLGFdGSFSLRGrdqdqsjTtsBTVTTBnVjVvHHBtHggt" },
  { input: "hHhnFHQpcFcHjcjfZfZRnjjnNNBvNNNtwvNtbwPtNcPtBgbg" },
  { input: "zzVLWCHLSdCttbvw" },
  { input: "mMLsHDMVFlRhhmhm" },
  { input: "MHMgBNQQPCMMQBbBQQgJHbWttdlfWpZJVWtGGztfWJZW" },
  { input: "nvLzDTDFDFqSqncTFddLGfWfssVWWVdlGs" },
  { input: "njScSmcnFDDhnmcmnSBzMggjjMQrQCjBQrwH" },
  { input: "MFVFHqhHHfVVSGcVQCLttttWTtLQ" },
  { input: "BgdJJrJzbGpLssCtTLLCpC" },
  { input: "PGBGdjjllBGBjhmhHRlmSfhRDF" },
  { input: "BLJmWwBJDDmLDFnVPzvTttvNhNFsHhvvQH" },
  { input: "cjbSqfWbRrbSzNMjhtNzzTsT" },
  { input: "dRdbgflfqmWggGmwWW" },
  { input: "lBTTnDMnNwWdpwMllTMDdTBTSRJjRRcSJRhRGhwtccScgjtg" },
  { input: "vvsnCVnHHnsvPzLfVJjtShgGJGVJSc" },
  { input: "zQQvzCZbsnbHCWMdFpMqblBqND" },
  { input: "CLggQjStSQjLgVRfhBRztwpBpt" },
  { input: "DNVmJDFcGNGlmNDnGFnsGcDdwzzZwZPsBPZZhhfBTpwhPfZh" },
  { input: "DMDccrnrdnDJcJGFGmCqbLvQqHVSSQVMCgHV" },
  { input: "rZVNNDrCFCbjbRSgjhZv" },
  { input: "czcMTcGMlcjjvvvGdhbb" },
  { input: "pHMpHtLWHHHztMzsvqvnVqNvsnNDqW" },
  { input: "hPhPBQVjzjQScjChRVVVsdfbvdmvvpGmvfdbff" },
  { input: "nwZwZWNTrwLTTDtbfmHDpGccstDv" },
  { input: "FLFJNllFrwTgTwNLnwTlFPhcjjhRhSMSjjBPhzJPQq" },
  { input: "CgJCHgJfHzGrrMjJpl" },
  { input: "SWqQLSQqdFSLrrCSZrvpzjMM" },
  { input: "QLWqhFLQdwFqnPbHcCHPbhCh" },
  { input: "jLplfcfjQfptPtLTTtPrRqCCCjZvhBhwhDjwhBBBqC" },
  { input: "msznRWgSmmHbSJwDvvBqCCqWFF" },
  { input: "mzdsVnbbSSznmbGgGSmTclPcrQffdLfMTLRLtl" },
  { input: "PpQQFdNFBtdsFNNPPthTtldwGMnZVvmbbVGbMwrGvG" },
  { input: "wHWRJDjHHRgJDZlmVZmnvDbDDM" },
  { input: "JqJfgRWLSqWJfcsBfwPpPwFpNwfC" },
  { input: "SjpVgjghVZvssgsHjQfHcfcnfNcnbqcRbr" },
  { input: "WBtNWTWNJnCTCbRbQR" },
  { input: "FlWGtwPJmJPBmwFtMGmpNhDSSSgZhSszzghsMD" },
  { input: "fSfzvQSbbSSSTQQzDQTzHsqHmjHVFsjqVJsbrrLs" },
  { input: "GWZncGGdBwlPGPJcGlBcPgNGqLqmjsHMVLrrVMwjsMMssLmr" },
  { input: "ltGWNggZJnCRhDtzvtTt" },
  { input: "zzSHMgsPWzLSJQMMWQWLJBLVqcmVrzmvcpFcqmqpmFprFV" },
  { input: "TlDnwhDblbnbbtbjdpVCrmFVDgmprcRCcF" },
  { input: "hTdjgdldgdfZWWGGHQJHWZQH" },
  { input: "TZVsSRGsGMGWZTvpmrgcMCmrwwFFgF" },
  { input: "BDPPnDDLDqDFLNLgctLNrm" },
  { input: "PzDPfHPdDPdJPfdHJqdbnnSVvRvsjZSvbsrRGhvGRhTG" },
  { input: "nnghnhLhgdVqSPLHcPHPNtpmrRptNt" },
  { input: "DwvMWlsJlGzsGMlvsZcWWbRrNHNtZtHttHNTNttTrTTR" },
  { input: "DDzDcwlWWGlcsszGwBCggFqgghCBfqCFdhSh" },
  { input: "GzgQpJnwgJfbSWpSvqtvlBtmSLmLlvLS" },
  { input: "zCHsRZjHdzVPRFNlLlvtlNMNNrtDrt" },
  { input: "zzZVsCcCCHzRhcbpwGJGGpcf" },
  { input: "lVQMrwlMwwMCBZmFtthmVmsgWhTL" },
  { input: "bdzHSSFJcvzcpFDptsDDmhTgLmnmmmhT" },
  { input: "SFpcGvdpddvGlBPZMCGrBZ" },
  { input: "QmQTQTFTSQPNbsPjPnntZjjnnDlBBB" },
  { input: "JHqJqhfCJpWfpHchRzzCnGBjtjDZltsZpljGntrr" },
  { input: "chdMHqHcMhWMfRczMJmmQsVTSNbNNFbdQNST" },
  { input: "HHdFqqDRdNsHfNRsjWPCBcCCZPwDCZVBVc" },
  { input: "lhlgprMrlprbplzwZQPwwPjbZZCPwP" },
  { input: "lpljllTGGGglhThpjSvdssSnfRRTdRnvsN" },
  { input: "sDzjCqLLzddjsdRsSShgmtnCgFnmnffmmFcf" },
  { input: "rJbqJMTqJGVTrgnFmfhcfmnJgm" },
  { input: "GQbBWZGbVrqpqWpZZHlwDsDsRsdDlDRDBDsD" },
  { input: "LbLbvbhQgblwwqbjGG" },
  { input: "cFTTMsczJsTWJFfNNlVqvDqjNvlFqZ" },
  { input: "mfMvJHvmdLgLRgpHRR" },
  { input: "cvhRpWWhpfpcTpWvRcRcWVNwsjNLJFsJjwLtMLdsdsLJjL" },
  { input: "ZZPqGqgZrllbbVMtnJtllwJtltnj" },
  { input: "rrPCSQHbbrSqHqqZGGQbvzBVTpfzmvBvcvRCTpzT" },
  { input: "VMzNNhWVlrbJHbjcJCjCSR" },
  { input: "qgtDBgBtTGjqJvSPRJHCqHcd" },
  { input: "GfnfLjjgGLmgBWpWrMMnzWZppl" },
  { input: "zRtfBftCvvPSvPclZgcgJznWcgnq" },
  { input: "dDpGpVdwdGphbDMpdQhnJjjqnZQWnZNcNWlqlJ" },
  { input: "wdFdTDpGDSCmTtRqRq" },
  { input: "bTGrRzjbmbmqsGDDjHPpWpfjHJZFVPJp" },
  { input: "LwdwNNgMLfZTdCHPPd" },
  { input: "lhtwtvttgnchcsrvmzTvmsTbbm" },
  { input: "dfLjdlqLtqpbpPQpHS" },
  { input: "ZGJnFZFDpBWWGBTzzrhmhHzHQPFPvQ" },
  { input: "NgJGGGNGnJWgMDWGgDpWnZWgwdRCtwCCRVLdjwVcccdwct" },
  { input: "MMtzRCTnVVnHbbMNrHMRRVQJFrPPDsrsJgjjQGJGpFFF" },
  { input: "ZcqWqdfcmfhwDgGpDJmmQDQs" },
  { input: "LhwBddvlddvdLCgCtCTzgzMN" },
  { input: "ZffpWcfPcPrTwlVCvDhhcS" },
  { input: "GMLBNHjMBGtmjtMQMJjLHTwwsSswdslhGwDhsDvCvV" },
  { input: "tQgNRHMHQggHjQttbZqfFqrnqSZWfPZR" },
  { input: "MDqbPdqGfwGbfMswqfJdPGgQpCZvQgmvJFCmQJQvRCQv" },
  { input: "WFthczzzrpWgpHlRRC" },
  { input: "BhLSFnFrcLzhtSFnSTznhGbMGwjGwjjPbGDqjdqTMd" },
  { input: "zbQdJbBPTsWcCgdmfC" },
  { input: "DNqZHjvwZMShDhwqvLmlgVnLmcnsfnVf" },
  { input: "HHSFSjNZFqjZrhQpPtzrBgQzPrpB" },
  { input: "BzzJHvJJvWsgzPPTWPSJsJgNtmMtNFlvNZFltFtttjmtVZ" },
  { input: "cbccGnqhwhdpqRnnrdqdntZVFfMCltMtGFCmtFNFlj" },
  { input: "wnlRRQbnpHQWHgSQTs" },
  { input: "SQQBFnPzSnQVSzFSWlzlBSWFMsqmMmzLLChTmmMqzsTChmss" },
  { input: "ZgdwrJdtJrgpcCwZNbbjsGhGDvMrrqmmMmDhTsqv" },
  { input: "NtRZwCbZbbjRZNJcRbjWVWPnWHQWVPBQnHlfRB" },
  { input: "jLtlpljLpsbRnDNtBpbjdqWcqChccbhqChqbWQbQ" },
  { input: "gVwwggvJJwBqgWqfBCgT" },
  { input: "VHZrPSHwzSwvDLnnLlsrDRBp" },
  { input: "GBDGDrhwVrFhVCVBvhhvwBDVcmlfcPcMMmmmqNTScNNNflSF" },
  { input: "RzRLRbddjZTbTQjJSWNzlNWNcPqNWqSf" },
  { input: "dHjRgddHnZngjHLnQsgZHbGrrVpwpTtThnDBppVCTpDp" },
  { input: "dpjwvdLwtvJszhmzhRVj" },
  { input: "QfFQrffPBCBZMQrMRWzmzmVWVghVLs" },
  { input: "GBPGBrFrHZTBSTqvvLNtqSpq" },
  { input: "zFcGnQcZPZncbbbhPncpNCwzvwmjMvwwmwmpvd" },
  { input: "tBRtdrRTJNvRjMMwRC" },
  { input: "rlWSqVtTHqtVTrngQnfbQFdcghgW" },
  { input: "RMjfvsbQPvvNpLmLprFJFrFJJT" },
  { input: "SqCtGCcZZCwcCqqcGdWGdSZmMTmnVBdLnTTgTrMgrgVLTB" },
  { input: "lGzGzHSCzHctsQRMsQPzDjNs" },
  { input: "FQTWdTVMDWWVWFDTFcVcWJqTlCCCSlFmtCmNZStsmFmCwCgm" },
  { input: "nPLbGZzrgwBlbBlS" },
  { input: "PppGRnzPnpzvZVDJVvTfDVVVdD" },
  { input: "CQlDsWWfflWDMMhRmTGqFwSjJFdqwSQJzF" },
  { input: "PgpVbZPcHgBcgZrBZcHNTTbdqTGjSqFjRFjwSjGG" },
  { input: "VvgRBBNLRrPhsfhLWLWDtW" },
  { input: "hHhZDcDcPZWpLZWpCQ" },
  { input: "pbqdwmbqqmBpdMsgdqjCGvfCWGTWLGmWfGQtVt" },
  { input: "wjjbsFBRbwFgMpDznPDrrFcShr" },
  { input: "zGmsJQsDBBmDDJJpRZzSqZZPRffWRSqh" },
  { input: "LQlVHjCCNCLRSgWlZnhPZW" },
  { input: "bLtHCHtjVHQDTJcGDQbs" },
  { input: "QPRlnHfPllgRfnqhcwgwGMGzBWzBBBBB" },
  { input: "LCtVCZtDbdttjZFtvjvdDMGGBmBWWZWBBWGSsWJSJm" },
  { input: "dFVNTVbTjMnHlThHnpHR" },
  { input: "hGhZLlqmqZWTcWrmWqrWmTrqjQVQwNHPgPwPPSgPjNwVSLjD" },
  { input: "bsMJBRMvRsvsJMRRbspFgQwSNNSNwVNjgwDMDgHH" },
  { input: "pFnFtvCQFsbBQzsBrmnTWchWZqWqWqGZ" },
  { input: "wpwlJdCWJWdzlWGRRcrDrwRqrqDFrF" },
  { input: "ZmPsSVnnTvmHDgFcDTHFTF" },
  { input: "smVvnSQhbsNsvsmsnQQclzGCWpphppLJCdJWBpll" },
  { input: "FfSmMJmBDfBjDSjFtBVmftBQPwPhPCbhQvbhwCCbvhhjhq" },
  { input: "ZnZHZgclJWNbwbcbcwPrQv" },
  { input: "ZNNGLHzHNZTTJnlFFfVmDBsFSVLdSD" },
  { input: "DDBvjMvBJMtWjNRNrvdtbshTdpssdPSgpFpP" },
  { input: "LwGQcwLGJTSssQbg" },
  { input: "wcfcCcmHfJmcLLVZVqBBBqWDRqBRDWzHNN" },
  { input: "LhnpcdcdrChplvllHptlgR" },
  { input: "TsSTSBqPBTGNzqGfzfffGfVtPlHHvMDtHtRMlvjHHgtv" },
  { input: "sBfWNGQmQbCgQhQn" },
  { input: "pnnHngqsRjstjRgtrBDlBwDgwDZBldlD" },
  { input: "SFvJMGhhvcbMSWPJbFzVDdzDZwDFlFlzfFBV" },
  { input: "JJNWGSWSMNMCPhcvMhGStwtjtRRtRRqRsCtQjqRj" },
  { input: "nQZfJswFffjJplqhlqZlVVhp" },
  { input: "vtdCvGdBCzVHgnzLDlpL" },
  { input: "BbCTGvtGnBBCPjrsccjrwbrFjj" },
  { input: "wjjvDQwWvSQDLbwfNrrJcMHrczcpWN" },
  { input: "tTnqlRsTRthFhnnpfNrmcTNMzfCzHr" },
  { input: "slsBGVlqghMRhsRlltsFDgQSDbQwPSPLQSZjPSLQ" },
  { input: "PcQmmQRQZRFQPjjDWhgCgWdM" },
  { input: "nBGtbGNBBGvJbbtpWhCNCjmMjHlWHDdM" },
  { input: "vbBnBBrrvVBtJJbvtzzptRQLLZLRFfqLSTSfzqwfqm" },
  { input: "PBFZDFPsDZBnTTBdDHSNSpNzmVTVmVGlNH" },
  { input: "WvqFLWQCMQLMRtQJFWQLvQCJVzmNjNzVCllVmGSlNHlVzljH" },
  { input: "WRtrhtWQWFbrrBwBZrbn" },
  { input: "MwWnMPnMPNswjPDvRbsblCGFZGZF" },
  { input: "JdJVVVtLdgZhvGVBDZhZ" },
  { input: "rqmdqtgcLQLTfWffwGGmmp" },
  { input: "QQhhWzQWsMhZjbbmffgfjrGDdfdGvv" },
  { input: "HnCJVHcnnHttCRVRCcnBCqJBGfPmTvTvdDfvqfrddNDDggGG" },
  { input: "wBwwcRBBCJpFcFcpnVVFQWQLSLbQZLmhzshMlMwQ" },
  { input: "CgDNbsDcHjTcgDCgjRHMJrlHFrBHFmrttrGGtFwG" },
  { input: "VfQJnvJdhvSJZphSzWpvSzZSltGGBllGBqPPFPrwrmfqtFFB" },
  { input: "VJLvdQhphhQnjLsjDDjDcRbL" },
  { input: "LjljTPdLdccLhcMZhTTMdzrrtzGgtvrgnttNDGrWtDgn" },
  { input: "hbCmCHqHmSbRgNrtvCgGgttN" },
  { input: "SJFJRFpHqwSFSpsHwbHwRhSJPTjMMMPdPlPLcVQscLVQQVlL" },
  { input: "QmTTQVqrVrMvbCwLczbRlQ" },
  { input: "sSNtNGZFjBSsjSSShcRvwCFLlzWcWRzCWv" },
  { input: "LLNjZhSGZBnjhJjjrrTgPqgPgTfqfJpf" },
  { input: "DCCjDDtHVptCtvMZlJbSnScWWfHlhW" },
  { input: "qsTFmTgmqRRLswQGmfWwSnZSSfJSSWZcWb" },
  { input: "dsmqgqdsNgTFLFRLGmRpBtBDtDNVpPCCfVrtpD" },
  { input: "LLNRhHhRbsNGjqCBPBrLCw" },
  { input: "lgcFfvWGTllzfJVVFVWDzFqqMrZCMBrZZqvSrCPZSSrr" },
  { input: "fFGGlTTTlzWQGzzDFttQmHnpnhtmmpRssm" },
  { input: "LZNnBgtlNZztzmGHmpHHPPPm" },
  { input: "QwjjQRCQScbFFFchhFrFjwmsNPHSSWJGsGppMSWMmWqs" },
  { input: "dQCwwbwhrjQQjCwRwbhRBlDDfBtVlnNnlgLdnvvd" },
  { input: "wRbGbqqGCwnGTRqBqlMVphpgMgMFdnFVnt" },
  { input: "cgzvssscgHJVdhDdhDMvDM" },
  { input: "PjcZcsJrJHWgrPBQmCqRBPSSRCSb" },
  { input: "rHBmLlPLlTzztvRtGsVL" },
  { input: "NWJJWWjJDJWWhphqwCFCwzvRVcgRtctRgNNVVscsGc" },
  { input: "hqCCsnCpCDnbCnWhwpbHbBHmMBMMmdPrZfdP" },
  { input: "GRPprPQdsprGpGgGTlqfVqnZLgnLnwNZLw" },
  { input: "CCWJMMvhhCvthtCjvDWFjMcCVZJLNnfqnllwzlzNnzzwVNnN" },
  { input: "cDtZFjDjcMCDDtZFSMCvvDpmsmSRRpmmbSpdPRdTmTsp" },
  { input: "mmPpsbZZbbzvzgbrZRPgPMWqtHtqDnGCnMWCDwGHwtwW" },
  { input: "cBFBNNccsTLjJjfcjfGDGQtWwFCnCGtqCCQH" },
  { input: "TNsTLJlffdldzvrmbmrPzp" },
];

const findCommonLetter = (string1, string2) => {
  let letter = "";
  for (let i = 0; i < string1.length; i++) {
    let selectedLetter = string1[i];
    for (let j = 0; j < string2.length; j++) {
      if (selectedLetter === string2[j]) {
        letter = selectedLetter;
      }
    }
  }
  return letter;
};

const splitHalf = puzzleInput.map((item, index) => {
  const middle = item.input.length / 2;
  const s1 = item.input.substring(0, middle);
  const s2 = item.input.substring(middle);
  return { ...item, s1, s2 };
});

const findCommons = splitHalf.map((item, index) => {
  const letter = findCommonLetter(item.s1, item.s2);
  return { ...item, [`commonLetter${index + 1}`]: letter };
});

console.log(findCommons);

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lettersWithValues = alphabet
  .split("")
  .map((alpha, index) => ({ [alpha]: index + 1 }));
console.log(lettersWithValues);

const inputWithValues = findCommons.map((item, index) => {
  const keys = lettersWithValues.map((item) => Object.keys(item)).flat();
  const values = lettersWithValues.map((item) => Object.values(item)).flat();
  const valueIndex = keys.findIndex(
    (letter) => letter === item[`commonLetter${index + 1}`]
  );
  const value = values[valueIndex];
  return { ...item, letterValue: value };
});

const sum = inputWithValues.reduce((acc, value) => acc + value.letterValue, 0);

console.log(inputWithValues);
console.log(sum);
