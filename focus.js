/* ============================================================
   ÔN TẬP CÂU HỎI TRỌNG TÂM – dữ liệu lấy từ file
   "Câu hỏi trọng tâm thi Quản trị ngân hàng.pdf"
   outline[].topic trùng khóa trong window.TOPICS (questions.js)
   ============================================================ */
window.FOCUS = {
outline: [
 {topic:"pt", title:"Phân tích hoạt động kinh doanh ngân hàng", items:[
  "Tính và giải thích ROA, ROE, NIM, CIR, hệ số nhân vốn chủ sở hữu",
  "Phân biệt tài sản bình quân với tài sản sinh lãi bình quân khi chọn mẫu số",
  "Quan hệ ROA – ROE – đòn bẩy tài chính; giải thích ROE tăng trong khi ROA giảm",
  "Tác động của thay đổi quy mô tài sản sinh lãi và NIM đến thu nhập lãi ròng",
  "Ảnh hưởng của NII, thu nhập ngoài lãi, chi phí hoạt động, chi phí dự phòng đến lợi nhuận",
  "Loại khoản thu nhập/chi phí phát sinh một lần để đánh giá kết quả hoạt động thường xuyên",
  "Tính tỷ lệ nợ xấu, tỷ lệ bao phủ nợ xấu từ số dư đầu kỳ và biến động (thu nợ, chuyển nhóm, dùng dự phòng xóa nợ)",
  "Vận dụng CAMELS nhận xét chất lượng tài sản, khả năng sinh lời, có xét nguyên nhân thay đổi",
  "Nhận diện nguồn thu nhập ngoài lãi và phân tích cơ cấu thu nhập",
  "Tính CIR và giải thích thay đổi sau khi điều chỉnh thu nhập, chi phí",
  "Mức đóng góp của một nhóm khách hàng/gói dịch vụ: doanh thu phí − chi phí phục vụ",
  "Xác định mức phí tối thiểu để đạt mục tiêu lợi nhuận",
  "Tác động của thay đổi mức phí, số lượng khách hàng, chi phí phục vụ",
  "Tác động của phát triển CASA đến chi phí lãi, NII, lợi nhuận sau khi tính thêm chi phí vận hành"]},
 {topic:"gap", title:"Rủi ro lãi suất – Khe hở nhạy cảm lãi suất (GAP)", items:[
  "Xác định tài sản và nguồn vốn nhạy cảm lãi suất trong từng khoảng thời gian",
  "Tính GAP từng dải thời gian và GAP lũy kế tính đến thời điểm tái định giá",
  "Chiều tác động của lãi suất tăng/giảm đến NII khi GAP dương, âm hoặc bằng 0",
  "Tính thay đổi NII khi tài sản và nguồn vốn tái định giá ở các thời điểm khác nhau",
  "Xử lý trường hợp mức điều chỉnh lãi suất của tài sản và nguồn vốn khác nhau hoặc lãi suất chạm sàn",
  "Chọn cách điều chỉnh cơ cấu tài sản, nguồn vốn hoặc thời điểm tái định giá để đạt mục tiêu GAP",
  "Hiểu hạn chế của việc chỉ dùng GAP tổng hợp để đánh giá biến động NII"]},
 {topic:"dur", title:"Rủi ro lãi suất – Khe hở kỳ hạn & EVE", items:[
  "Tính giá trị hiện tại của các dòng tiền và Macaulay Duration của danh mục",
  "Chuyển đổi Macaulay Duration ↔ Modified Duration (ghi nhớ công thức)",
  "Ước tính biến động giá trị thị trường của tài sản và nợ phải trả khi lợi suất thay đổi",
  "Tính biến động giá trị kinh tế của vốn chủ sở hữu (EVE)",
  "Khi lợi suất tài sản và nợ thay đổi khác mức: dùng công thức đầy đủ, không dùng công thức rút gọn/xấp xỉ",
  "Xác định duration mục tiêu hoặc điều chỉnh cơ cấu danh mục để giảm độ nhạy EVE",
  "So sánh mức độ nhạy cảm lãi suất giữa các ngân hàng",
  "Đánh giá một phương án quản trị dựa trên cả NII và EVE"]},
 {topic:"tk", title:"Quản trị thanh khoản", items:[
  "Nhận diện nguồn cung và nhu cầu thanh khoản",
  "Lập kế hoạch dòng tiền, tính số dư tiền khả dụng theo ngày/kỳ",
  "Xác định mức thiếu hụt lớn nhất và nhu cầu tài trợ để duy trì số dư tối thiểu",
  "Phân biệt tổng nguồn tiền trong kỳ với nguồn tiền sẵn có tại đúng thời điểm phải thanh toán",
  "Tính tiền nhận từ repo sau khi xét tài sản đã cầm cố, giới hạn giao dịch và mức khấu trừ (haircut)",
  "So sánh bán tài sản, repo, vay liên ngân hàng theo khả năng cung cấp tiền, thời điểm và chi phí",
  "Phân biệt nguồn tài trợ đã cam kết với nguồn đang đàm phán",
  "Tránh tính trùng nguồn tiền khi cùng một tài sản dùng trong các giao dịch khác nhau",
  "Tính LDR theo định nghĩa được cung cấp; xác định nhu cầu huy động hoặc điều chỉnh dư nợ",
  "Phân tích sự phù hợp giữa kỳ hạn tài sản và kỳ hạn nguồn vốn"]},
 {topic:"von", title:"Quản trị vốn ngân hàng", items:[
  "Vốn tự có, vốn cấp 1, vốn cấp 2 và các khoản giảm trừ",
  "Tính CAR và xác định vốn hoặc RWA sau các biến động",
  "Xác định vốn tự có và CAR khi đề quy định mức tối đa vốn cấp 2 được tính vào vốn tự có",
  "Tác động của lợi nhuận giữ lại, cổ tức tiền mặt, phát hành công cụ vốn đến CAR",
  "Tính nhu cầu bổ sung vốn, mức cổ tức tối đa hoặc mức giảm RWA để đạt mục tiêu",
  "Tính thay đổi RWA khi điều chỉnh tài sản có hệ số rủi ro khác nhau",
  "Chọn phương án tăng trưởng đáp ứng đồng thời yêu cầu về vốn, thanh khoản và khả năng sinh lời"]},
 {topic:"ps", title:"Đọc thêm: Công cụ phái sinh (IRS)", items:[
  "Cơ chế cơ bản của hoán đổi lãi suất (IRS) – đọc lại slide và môn Tài chính quốc tế",
  "Xác định chiều trả/nhận lãi cố định hoặc thả nổi phù hợp khoản mục cần phòng ngừa",
  "Vai trò của việc khớp giá trị danh nghĩa, lãi suất tham chiếu và thời điểm tái định giá"]}
],

notes: [
 "GAP = 0 vẫn có thể làm NII thay đổi nếu tài sản và nguồn vốn tăng/giảm lãi suất khác mức.",
 "Khi nguồn vốn chạm lãi suất sàn, chi phí lãi có thể giảm ít hơn thu nhập lãi.",
 "ROE có thể tăng nhờ đòn bẩy dù ROA giảm.",
 "Tỷ trọng thu nhập ngoài lãi có thể tăng dù phí dịch vụ thường xuyên giảm.",
 "NPL giảm sau xóa nợ, ROA tăng nhờ lãi bán tài sản: cần xem xét thêm trước khi kết luận.",
 "Tăng CASA giúp giảm chi phí lãi, nhưng lợi nhuận còn phụ thuộc chi phí vận hành tăng thêm.",
 "Bán tài sản tạo tiền ngay nhưng khoản lỗ làm giảm vốn. Phương án được chọn phải đạt đủ các giới hạn đề cho."
],
examples: [
 {t:"IRS: phòng ngừa chi phí vốn vay thả nổi", b:"Ngân hàng vay 100 tỷ, lãi suất = tham chiếu + 1%/năm, để cho vay lãi cố định. Ký IRS danh nghĩa 100 tỷ: trả cố định 5%, nhận tham chiếu. Phần tham chiếu nhận được bù phần phải trả ⇒ chi phí sau hoán đổi = 5% + 1% = 6%/năm (điều khoản khớp, bỏ qua phí).\n• Cần ổn định chi phí vốn vay thả nổi → IRS trả cố định, nhận thả nổi.\n• Cần ổn định thu nhập cho vay thả nổi → IRS trả thả nổi, nhận cố định.\n• Phải khớp 3 yếu tố: giá trị danh nghĩa (vay 100 mà IRS 60 thì 40 vẫn chịu rủi ro), lãi suất tham chiếu, thời điểm tái định giá (vay điều chỉnh tháng, IRS 3 tháng một lần thì lệch lãi giữa hai kỳ)."},
 {t:"Ví dụ 1 – Tiền phải có trước thời điểm thanh toán", b:"Có 60 tỷ, phải trả 100 tỷ lúc 10h; khoản thu 70 tỷ về lúc 14h. Đến 10h vẫn thiếu 40 tỷ và phải thu xếp trước giờ thanh toán; khoản thu 14h dùng hoàn trả khoản vay bổ sung sau đó.\n→ Xác định số tiền có tại đúng thời điểm phải trả, không cộng tổng thu – chi cả ngày."},
 {t:"Ví dụ 2 – Bán tài sản đang repo", b:"Khả dụng 90 tỷ, đã gồm 30 tỷ vay repo lô trái phiếu X. Bán X thu 36 tỷ nhưng phải trả 30 tỷ repo để giải chấp.\nKhả dụng = 90 − 30 + 36 = 96 tỷ ⇒ chỉ tăng ròng 6 tỷ, không phải 36 tỷ."},
 {t:"Ví dụ 3 – Chọn nguồn tài trợ theo chi phí", b:"Thiếu 24 tỷ trước 11h. Repo tối đa 20 tỷ (0,2%/kỳ); liên ngân hàng tối đa 15 tỷ (0,4%/kỳ).\nRepo rẻ hơn → lấy 20 tỷ repo + 4 tỷ liên ngân hàng = 24 tỷ.\nChi phí = 20×0,2% + 4×0,4% = 0,04 + 0,016 = 0,056 tỷ (56 triệu đồng)."}
],

exercises: [
 {t:"Câu 1 – Ngân hàng Bình Minh (GAP, Duration, EVE, IRS)", data:[
  "NII quý I. Đầu tháng 1 lãi suất thị trường tăng 1 điểm %: 800 tỷ nguồn vốn chịu lãi cao hơn 1 điểm % ngay từ đầu tháng 1; 600 tỷ tài sản sinh lãi cao hơn 1 điểm % từ đầu tháng 2. Giữ đến hết quý; mỗi tháng = 1/12 năm.",
  "EVE: tài sản giá thị trường 2.200 tỷ, Modified Duration 2,5 năm; nợ phải trả 1.900 tỷ, Modified Duration 2 năm. Lợi suất hai danh mục cùng tăng 1 điểm %."], parts:[
  {q:"Tính GAP tái định giá của quý và ΔNII so với khi lãi suất giữ nguyên. Vì sao chỉ biết GAP cả quý chưa đủ?", a:"GAP quý = 600 − 800 = −200 tỷ (âm → lãi suất tăng làm NII giảm).\nΔNII = 600×1%×2/12 − 800×1%×3/12 = 1 − 2 = −1 tỷ.\nChưa đủ vì NII phụ thuộc cả thời gian mỗi khoản được áp dụng lãi suất mới (tài sản 2 tháng, nguồn vốn 3 tháng), GAP cả quý bỏ qua yếu tố này."},
  {q:"Dùng Modified Duration ước tính thay đổi giá trị thị trường của tài sản, nợ và EVE.", a:"ΔTS ≈ −2,5×1%×2.200 = −55 tỷ.\nΔNợ ≈ −2×1%×1.900 = −38 tỷ.\nΔEVE = −55 − (−38) = −17 tỷ."},
  {q:"ALCO chấp nhận EVE giảm tối đa 10 tỷ. Giảm MD tài sản xuống 2 năm có đáp ứng không?", a:"ΔTS = −2×1%×2.200 = −44; ΔEVE = −44 + 38 = −6 tỷ ≥ −10 ⇒ đáp ứng.\n(MD tài sản tối đa: 2.200×MD×1% ≤ 48 → MD ≤ 2,18 năm.)"},
  {q:"Dùng IRS (trả cố định, nhận thả nổi) để phòng ngừa chi phí khoản vốn vay thả nổi: cần đối chiếu điều khoản nào?", a:"Đối chiếu giá trị danh nghĩa, lãi suất tham chiếu và thời điểm tái định giá giữa IRS và khoản vay; chỗ nào lệch thì phần đó vẫn chịu rủi ro."},
  {q:"Danh mục chứng khoán: tiền nhận cuối năm 1, 2, 3 là 110, 121, 266,2 tỷ; chiết khấu 10%/năm. Tính PV, Macaulay, Modified Duration và mức giảm giá trị nếu lợi suất tăng 0,5 điểm %.", a:"PV = 110/1,1 + 121/1,1² + 266,2/1,1³ = 100 + 100 + 200 = 400 tỷ.\nMacaulay = (1×100 + 2×100 + 3×200)/400 = 2,25 năm.\nModified = 2,25/1,1 ≈ 2,045 năm.\nΔPV ≈ −2,045×0,5%×400 ≈ −4,09 tỷ (giảm khoảng 4,09 tỷ)."}]},
 {t:"Câu 2 – Ngân hàng Gia Di (CAR)", data:[
  "Đầu năm: vốn tự có 108 tỷ, RWA 1.000 tỷ. CAR nội bộ tối thiểu 10%. Kế hoạch: lợi nhuận sau thuế 16 tỷ, RWA tăng thêm 180 tỷ, trả cổ tức tiền mặt 6 tỷ; lợi nhuận giữ lại tính toàn bộ vào vốn tự có."], parts:[
  {q:"CAR đầu năm và cuối năm theo kế hoạch. Cuối năm vốn vượt mức tối thiểu bao nhiêu?", a:"CAR đầu năm = 108/1.000 = 10,8%.\nCuối năm: vốn = 108 + 16 − 6 = 118; RWA = 1.180 → CAR = 10%.\nVốn tối thiểu = 10%×1.180 = 118 ⇒ vượt 0 tỷ (nếu so mức 8% theo quy định: 118 − 94,4 = 23,6 tỷ)."},
  {q:"LNST thực tế chỉ 12 tỷ, RWA đúng kế hoạch: cổ tức tiền mặt tối đa?", a:"Cần vốn ≥ 118: 108 + 12 − D ≥ 118 ⇒ D ≤ 2 tỷ."},
  {q:"LNST 12 tỷ, vẫn trả cổ tức 6 tỷ: cần bổ sung vốn tối thiểu? Nếu chỉ giảm RWA thì giảm tối thiểu?", a:"Vốn = 108 + 12 − 6 = 114 → thiếu 118 − 114 = 4 tỷ.\nGiảm RWA: RWA ≤ 114/10% = 1.140 ⇒ giảm ≥ 1.180 − 1.140 = 40 tỷ."},
  {q:"Về kế hoạch gốc. X: LNST +3, RWA +40. Y: LNST +2,5, RWA +20. Cổ tức vẫn 6. Phương án nào vừa tăng lợi nhuận vừa giữ CAR ≥ 10%?", a:"X: vốn 121, RWA 1.220 → CAR 9,92% < 10% (không đạt).\nY: vốn 120,5, RWA 1.200 → CAR 10,04% ≥ 10% (đạt).\n⇒ Chọn Y."},
  {q:"Huy động 24 tỷ nợ thứ cấp đủ điều kiện vốn cấp 2. Vốn cấp 1 là 90, cấp 2 là 18; tổng vốn cấp 2 tối đa 40% vốn cấp 1; RWA giữ 1.000. Bao nhiêu được tính vào vốn tự có? CAR?", a:"Trần vốn cấp 2 = 40%×90 = 36 tỷ. Còn dư địa 36 − 18 = 18 tỷ ⇒ chỉ 18/24 tỷ được tính.\nVốn tự có = 90 + 36 = 126 tỷ; CAR = 126/1.000 = 12,6% (nếu không giới hạn sẽ là 13,2% – sai)."}]},
 {t:"Câu 3 – Ngân hàng Đông Thành (thanh khoản, LDR)", data:[
  "Tiền khả dụng đầu ngày 1: 55 tỷ. Dòng tiền ròng 3 ngày: chi 35, chi 45, thu 25 (tỷ). Yêu cầu số dư cuối mỗi ngày ≥ 10 tỷ.",
  "Trước cuối ngày 2: repo tối đa 30 tỷ trái phiếu (giá trị thị trường), bên cấp vốn khấu trừ 10%; còn hạn mức vay liên ngân hàng đã cam kết tối đa 20 tỷ. Hoàn trả sau ngày 3; chi phí trả riêng sau kỳ.",
  "Tháng tới: dư nợ cho vay 765 tỷ, tiền gửi khách hàng 900 tỷ; dự kiến tiền gửi giảm 60 tỷ, dư nợ giữ nguyên. LDR = dư nợ / tiền gửi khách hàng, giới hạn nội bộ 85%."], parts:[
  {q:"Số dư tiền cuối từng ngày khi chưa bổ sung tài trợ. Mức thiếu hụt lớn nhất so với yêu cầu 10 tỷ và ngày nào?", a:"Cuối ngày 1: 55 − 35 = 20. Cuối ngày 2: 20 − 45 = −25. Cuối ngày 3: −25 + 25 = 0.\nThiếu so với 10 tỷ: N1 không thiếu; N2 thiếu 10 − (−25) = 35 tỷ; N3 thiếu 10 tỷ.\n⇒ Thiếu hụt lớn nhất 35 tỷ, vào cuối ngày 2."},
  {q:"Dùng hết khả năng repo nhận được bao nhiêu? Cần vay thêm tối thiểu bao nhiêu liên ngân hàng và phải đủ hai nguồn chậm nhất khi nào?", a:"Repo = 30×(1 − 10%) = 27 tỷ.\nLiên ngân hàng cần thêm = 35 − 27 = 8 tỷ (≤ hạn mức 20 tỷ).\nPhải có đủ cả hai nguồn trước cuối ngày 2."},
  {q:"Nếu không huy động thêm tiền gửi: LDR dự kiến cuối tháng? Cần huy động thêm tối thiểu bao nhiêu để đáp ứng giới hạn?", a:"Tiền gửi = 900 − 60 = 840 → LDR = 765/840 ≈ 91,07% (> 85%).\nTiền gửi tối thiểu = 765/85% = 900 ⇒ cần huy động thêm 900 − 840 = 60 tỷ."},
  {q:"Quản lý đề xuất đưa số tiền nhận từ repo và vay liên ngân hàng vào mẫu số LDR. Có phù hợp không?", a:"Không phù hợp. Theo cách tính đề cho, mẫu số là tiền gửi khách hàng; repo và vay liên ngân hàng là vốn vay ngắn hạn từ tổ chức tài chính khác, không phải tiền gửi khách hàng. Đưa vào chỉ làm đẹp con số LDR mà không thay đổi thực chất cơ cấu nguồn vốn."}]},
 {t:"Câu 4 – Ngân hàng An Phú (hiệu quả, nợ xấu, gói dịch vụ)", data:[
  "Trong năm: thu nhập lãi ròng 96 tỷ, thu nhập ngoài lãi 32 tỷ, chi phí hoạt động 64 tỷ, chi phí dự phòng 14 tỷ. Tài sản bình quân 4.000 tỷ, tài sản sinh lãi bình quân 3.200 tỷ, vốn chủ sở hữu bình quân 400 tỷ; thuế suất 20%. Trong 32 tỷ thu nhập ngoài lãi có 8 tỷ lãi bán tài sản phát sinh một lần.",
  "Gói thanh toán mới: 10.000 khách, phí 180.000 đ/khách/năm, chi phí phục vụ trực tiếp 60.000 đ/khách/năm, chi phí vận hành cố định 0,8 tỷ/năm."], parts:[
  {q:"Lợi nhuận trước thuế, sau thuế, ROA và ROE.", a:"LNTT = 96 + 32 − 64 − 14 = 50 tỷ.\nLNST = 50×(1 − 20%) = 40 tỷ.\nROA = 40/4.000 = 1%; ROE = 40/400 = 10%."},
  {q:"NIM và CIR theo số liệu báo cáo. Loại khoản lãi bán tài sản thì CIR bằng bao nhiêu? Giải thích chiều thay đổi.", a:"NIM = 96/3.200 = 3%.\nCIR báo cáo = 64/(96 + 32) = 50%.\nLoại 8 tỷ: thu nhập hoạt động = 120 → CIR = 64/120 ≈ 53,33%.\nCIR tăng vì tử số giữ nguyên, mẫu số giảm: hiệu quả chi phí thường xuyên kém hơn con số báo cáo."},
  {q:"Theo phương án ban đầu, gói dịch vụ đóng góp bao nhiêu vào LNTT mỗi năm? Với cùng mức phí và chi phí, cần tối thiểu bao nhiêu khách đủ một năm để hòa vốn?", a:"Doanh thu 10.000×180.000 = 1,8 tỷ; chi phí trực tiếp 0,6 tỷ; cố định 0,8 tỷ.\nĐóng góp = 1,8 − 0,6 − 0,8 = 0,4 tỷ (400 triệu).\nĐóng góp/khách = 120.000 đ ⇒ hòa vốn = 800.000.000/120.000 ≈ 6.667 khách."},
  {q:"Đề xuất giảm phí còn 150.000 đ/khách/năm, khách tăng lên 12.000, chi phí phục vụ và chi phí cố định giữ nguyên. Phương án nào đóng góp nhiều hơn và chênh lệch bao nhiêu?", a:"Đề xuất: 12.000×(150.000 − 60.000) − 0,8 tỷ = 1,08 − 0,8 = 0,28 tỷ.\nPhương án ban đầu 0,4 tỷ ⇒ ban đầu đóng góp nhiều hơn 0,12 tỷ (120 triệu)."},
  {q:"Dư nợ gộp đầu năm 3.000 tỷ (nợ xấu 180 tỷ), dự phòng đầu năm 250 tỷ. Trong năm: giải ngân 350 tỷ nợ tốt, chuyển 90 tỷ từ nợ tốt sang nợ xấu, thu 30 tỷ gốc nợ xấu, dùng 20 tỷ dự phòng xóa 20 tỷ nợ xấu; chi phí dự phòng 14 tỷ ghi tăng dự phòng. Tính tỷ lệ bao phủ nợ xấu đầu và cuối năm.", a:"Đầu năm: 250/180 ≈ 138,9%.\nNợ xấu cuối = 180 + 90 − 30 − 20 = 220 tỷ.\nDự phòng cuối = 250 − 20 + 14 = 244 tỷ.\nBao phủ cuối năm = 244/220 ≈ 110,9% (giảm).\nTham khảo: dư nợ cuối = 3.000 + 350 − 30 − 20 = 3.300 → tỷ lệ nợ xấu 6% → 6,67%."}]}
],

ref: {
 ldr:[
  "Tử số: tổng dư nợ cho vay (nợ gốc nội bảng với cá nhân, tổ chức; loại dư nợ cho vay tổ chức tín dụng khác và vay tái cấp vốn NHNN không nhằm hỗ trợ thanh khoản).",
  "Mẫu số: tổng tiền gửi (tiền gửi tổ chức, cá nhân trừ ký quỹ, vốn chuyên dùng, một phần tiền gửi Kho bạc; cộng giấy tờ có giá, vốn chủ sở hữu theo quy định…).",
  "Trần LDR trong file: 85% (TT22/2019, sau đó sửa đổi cách tính tiền gửi KBNN bởi TT26/2022, TT08/2026, TT25/2026) và 95% (đoạn quy định mới ở cuối Câu 5). Khi đề cho sẵn giới hạn, luôn dùng giới hạn của đề."],
 hqla:[
  ["Cấp 1","100%","Tiền mặt; tiền gửi tại NHNN (gồm dự trữ bắt buộc); trái phiếu Chính phủ VN, tín phiếu KBNN, tín phiếu NHNN; chứng khoán CP/NHTW nước ngoài hệ số rủi ro 0%…"],
  ["Cấp 2A","85%","Chứng khoán CP/PSE/tổ chức tài chính quốc tế hệ số rủi ro ≤ 20%; nợ doanh nghiệp xếp hạng ≥ AA− (không phải tổ chức tài chính)."],
  ["Cấp 2B – RMBS","75%","Chứng khoán đảm bảo bằng bất động sản thế chấp nhà ở, xếp hạng ≥ AA, LTV bình quân ≤ 80%…"],
  ["Cấp 2B – khác","50%","Nợ doanh nghiệp xếp hạng ≥ BBB−; chứng khoán CP nước ngoài xếp hạng ≥ BBB− (hệ số rủi ro ≤ 50%); cổ phiếu phổ thông thuộc VN30."]],
 abc:{
  head:["Tài sản (tỷ đồng)","Số dư","Đặc điểm lãi suất"],
  rows:[["Tiền mặt, tiền gửi NHNN không hưởng lãi","500","Không hưởng lãi"],["Tiền gửi liên ngân hàng","1.000","Thả nổi"],["Cho vay ngắn hạn","3.000","Điều chỉnh 3 tháng/lần"],["Cho vay trung dài hạn","2.500","Cố định trong 3 năm"],["Cho vay trung dài hạn","1.500","Điều chỉnh 6 tháng/lần"],["Trái phiếu Chính phủ","1.000","Cố định, còn 4 năm"],["TSCĐ và tài sản khác","500","–"]],
  head2:["Nguồn vốn (tỷ đồng)","Số dư","Đặc điểm lãi suất"],
  rows2:[["Tiền gửi không kỳ hạn","1.500","Thấp, không điều chỉnh trong kỳ"],["Tiền gửi tiết kiệm 3 tháng","2.000","Cố định trong kỳ hạn"],["Tiền gửi tiết kiệm 6 tháng","2.000","Cố định trong kỳ hạn"],["Tiền gửi tiết kiệm 12–24 tháng","1.500","Cố định trong kỳ hạn"],["Vay liên ngân hàng","1.000","Không ghi loại lãi suất"],["Trái phiếu ngân hàng phát hành","1.000","Cố định 3 năm"],["Vốn chủ sở hữu","1.000","–"]]}
}
};

/* ---------- CÔNG THỨC theo chủ đề (khóa topic trùng TOPICS) ---------- */
window.FOCUS.formulas = [
 {topic:"pt", title:"Phân tích HĐKD & CAMELS", items:[
  ["NII","NII = Thu nhập lãi − Chi phí lãi","Cũng bằng TSSL bình quân × NIM"],
  ["NIM","NIM = NII / Tài sản sinh lãi bình quân","Mẫu số là TSSL, không phải tổng tài sản"],
  ["ROA","ROA = LNST / Tài sản bình quân","CAMELS theo quy định có thể dùng LNTT: đọc kỹ đề"],
  ["ROE","ROE = LNST / VCSH bình quân"],
  ["Hệ số nhân VCSH","EM = Tài sản bình quân / VCSH bình quân","ROE = ROA × EM → ROE tăng dù ROA giảm nếu đòn bẩy tăng đủ nhiều"],
  ["Lợi nhuận trước thuế","LNTT = NII + Thu nhập ngoài lãi − Chi phí hoạt động − Chi phí dự phòng"],
  ["Lợi nhuận sau thuế","LNST = LNTT × (1 − thuế suất)"],
  ["CIR","CIR = Chi phí hoạt động / (NII + Thu nhập ngoài lãi)","Loại khoản thu/chi một lần trước khi tính CIR thường xuyên"],
  ["Tỷ lệ nợ xấu","NPL = Nợ xấu / Tổng dư nợ gộp"],
  ["Nợ xấu cuối kỳ","Đầu kỳ + Chuyển từ nợ tốt − Thu nợ − Xóa nợ"],
  ["Dự phòng cuối kỳ","Đầu kỳ + Chi phí dự phòng − Dự phòng dùng xóa nợ","Xóa nợ làm giảm cả nợ xấu và dự phòng"],
  ["Tỷ lệ bao phủ nợ xấu","Coverage = Dự phòng / Nợ xấu"],
  ["Cơ cấu thu nhập","Tỷ trọng ngoài lãi = Thu nhập ngoài lãi / (NII + Thu nhập ngoài lãi)"],
  ["Đóng góp gói dịch vụ","LN = N × (Phí − CP phục vụ/khách) − CP cố định","N = số khách"],
  ["Hòa vốn / phí tối thiểu","N* = CP cố định / (Phí − CP phục vụ/khách)\nPhí min = (CP cố định + LN mục tiêu)/N + CP phục vụ/khách"],
  ["Phát triển CASA","ΔLN = ΔNII − Chi phí vận hành tăng thêm\nΔNII ≈ Vốn CASA tăng × (Lãi suất nguồn vốn thay thế − Lãi suất CASA)","Phải trừ chi phí vận hành mới kết luận lợi nhuận"]]},
 {topic:"gap", title:"Khe hở nhạy cảm lãi suất (GAP)", items:[
  ["GAP từng dải","GAP = Tài sản nhạy cảm − Nguồn vốn nhạy cảm","Chỉ tính khoản tái định giá trong dải thời gian đó"],
  ["GAP lũy kế","GAP lũy kế = Tổng GAP các dải từ đầu đến thời điểm xét"],
  ["ΔNII (GAP tổng hợp)","ΔNII = GAP × Δi × (thời gian/12)","Chỉ đúng khi tài sản và nguồn vốn cùng Δi, cùng thời điểm tái định giá"],
  ["ΔNII chi tiết","ΔNII = Σ TSᵢ × Δi_TS × tᵢ − Σ NVⱼ × Δi_NV × tⱼ\n(t = số tháng được áp dụng lãi suất mới / 12)","Dùng khi tái định giá lệch thời điểm hoặc Δi khác nhau"],
  ["Chiều tác động","GAP > 0: lãi suất tăng → NII tăng; giảm → NII giảm\nGAP < 0: lãi suất tăng → NII giảm; giảm → NII tăng\nGAP = 0: NII không đổi nếu Δi hai bên bằng nhau","GAP = 0 vẫn đổi NII nếu Δi lệch"],
  ["Lãi suất chạm sàn","Δi thực = max(i mới, sàn) − i cũ","Chi phí lãi giảm ít hơn thu nhập lãi"]]},
 {topic:"dur", title:"Khe hở kỳ hạn & EVE", items:[
  ["Giá trị hiện tại","PV = Σ CFₜ / (1 + y)ᵗ"],
  ["Macaulay Duration","D = Σ t × PVₜ / Σ PVₜ"],
  ["Modified Duration","MD = D / (1 + y)","Ghi nhớ: Modified = Macaulay chia (1 + lợi suất)"],
  ["Biến động giá trị thị trường","ΔP ≈ −MD × Δy × P","Công thức đầy đủ: tính lại P mới = Σ CF/(1 + y + Δy)ᵗ"],
  ["EVE","EVE = Giá trị thị trường tài sản − Giá trị thị trường nợ phải trả"],
  ["ΔEVE","ΔEVE = ΔTS − ΔNợ = (−MD_A × Δy_A × A) − (−MD_L × Δy_L × L)","Δy_A ≠ Δy_L: tính riêng từng bên, không dùng công thức rút gọn"],
  ["Duration mục tiêu","Giữ EVE không đổi (Δy bằng nhau): MD_A × A = MD_L × L → MD_A = MD_L × L/A","Hoặc giải MD_A từ mức giảm EVE tối đa cho phép"],
  ["Đánh giá phương án","Xét đồng thời ΔNII (ngắn hạn, theo GAP) và ΔEVE (dài hạn, theo duration)"]]},
 {topic:"tk", title:"Quản trị thanh khoản", items:[
  ["Số dư cuối ngày","Số dư cuối = Số dư đầu + Dòng tiền ròng trong ngày"],
  ["Thiếu hụt","Thiếu hụt = Số dư tối thiểu − Số dư cuối (nếu dương)","Thiếu hụt lớn nhất = max theo ngày"],
  ["Tiền sẵn có đúng thời điểm","Tiền có tại thời điểm T = Số dư + các khoản thu về trước T","Không cộng tổng thu cả ngày"],
  ["Tiền từ repo","Repo = min(Giá trị thị trường × (1 − haircut), hạn mức)","Trừ phần tài sản đã cầm cố ở giao dịch khác"],
  ["Bán tài sản đang repo","Khả dụng tăng ròng = Giá bán − Tiền hoàn trả repo"],
  ["Chi phí tài trợ","Chi phí = Σ Số tiền nhận × Lãi suất/chi phí cả kỳ","Ưu tiên nguồn rẻ, dùng một phần mỗi hạn mức"],
  ["LDR","LDR = Dư nợ cho vay / Tiền gửi (theo định nghĩa đề cho)"],
  ["Điều chỉnh theo trần LDR","Tiền gửi tối thiểu = Dư nợ / LDR trần\nDư nợ tối đa = LDR trần × Tiền gửi\nCần huy động = Tiền gửi tối thiểu − Tiền gửi hiện có"],
  ["HQLA đủ điều kiện","HQLA = Σ Giá trị × Hệ số thanh khoản (cấp 1: 100%, 2A: 85%, 2B: 75%/50%)","Giả định bỏ qua giới hạn tỷ trọng nếu đề không nêu"]]},
 {topic:"von", title:"Quản trị vốn", items:[
  ["Vốn tự có","Vốn tự có = Vốn cấp 1 + Vốn cấp 2 (được tính) − Khoản giảm trừ"],
  ["Trần vốn cấp 2","Vốn cấp 2 tính được = min(Vốn cấp 2 thực có, x% × Vốn cấp 1)","x do đề quy định (ví dụ 40%)"],
  ["RWA","RWA = Σ Giá trị tài sản × Hệ số rủi ro","ΔRWA = Σ ΔTài sản × hệ số"],
  ["CAR","CAR = Vốn tự có / RWA"],
  ["Vốn cuối kỳ","Vốn cuối = Vốn đầu + LNST − Cổ tức tiền mặt + Vốn phát hành thêm","Lợi nhuận giữ lại = LNST − cổ tức"],
  ["Vốn yêu cầu","Vốn yêu cầu = CAR mục tiêu × RWA"],
  ["Bổ sung vốn","Cần bổ sung = CAR mục tiêu × RWA − Vốn hiện có"],
  ["Cổ tức tối đa","Cổ tức tối đa = Vốn trước cổ tức − CAR mục tiêu × RWA"],
  ["Giảm RWA","RWA tối đa = Vốn / CAR mục tiêu\nMức giảm tối thiểu = RWA hiện tại − RWA tối đa"]]},
 {topic:"ps", title:"Phái sinh (IRS)", items:[
  ["Chiều giao dịch","Vay thả nổi cần ổn định chi phí → trả cố định, nhận thả nổi\nCho vay thả nổi cần ổn định thu nhập → trả thả nổi, nhận cố định"],
  ["Dòng tiền IRS ròng","Thanh toán ròng/kỳ = Giá trị danh nghĩa × (Lãi nhận − Lãi trả) × thời gian kỳ","Cùng đồng tiền: thanh toán phần chênh lệch"],
  ["Chi phí sau hoán đổi","Chi phí = Lãi cố định IRS + Spread của khoản vay","Phần tham chiếu nhận được bù phần tham chiếu phải trả"],
  ["Điều kiện khớp","Giá trị danh nghĩa IRS = Giá trị khoản mục\nCùng lãi suất tham chiếu\nCùng thời điểm tái định giá","Phần lệch vẫn chịu rủi ro lãi suất"]]}
];
