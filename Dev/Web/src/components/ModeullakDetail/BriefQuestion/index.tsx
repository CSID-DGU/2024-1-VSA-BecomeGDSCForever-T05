import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import * as Styled from "./style";
import Row from "@/components/Common/Row";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";

export default function BriefQuestion() {

    const shortCode = "```int main()\n" +
        "{\n" +
        "    cin >> N;\n" +
        "    for (int i = 0; i < N; i++) {\n" +
        "        cin >> a[i];\n" +
        "    }\n" +
        "```";

    const longCode = "```c++\n" +
        "#include <iostream>\n" +
        "#include <vector>\n" +
        "#include <algorithm>\n" +
        "using namespace std;\n" +
        "\n" +
        "int N;\n" +
        "long long a[1000004], dp[1000004];\n" +
        "vector<long long> LIS, ans;\n" +
        "\n" +
        "int main()\n" +
        "{\n" +
        "    cin >> N;\n" +
        "    for (int i = 0; i < N; i++) {\n" +
        "        cin >> a[i];\n" +
        "    }\n" +
        "    dp[0] = 0;\n" +
        "    LIS.push_back(a[0]);\n" +
        "    for (int i = 1; i < N; i++) {\n" +
        "        int index = lower_bound(LIS.begin(), LIS.end(), a[i]) - LIS.begin();\n" +
        "        if (index == LIS.size()) {\n" +
        "            LIS.push_back(a[i]);\n" +
        "        }\n" +
        "        else {\n" +
        "            LIS[index] = a[i];\n" +
        "        }\n" +
        "        dp[i] = index;\n" +
        "    }\n" +
        "    int res = LIS.size();\n" +
        "    cout << res << '\\n';\n" +
        "    for (int i = N - 1; i >= 0; i--) {\n" +
        "        if (dp[i] == res - 1) {\n" +
        "            ans.push_back(a[i]);\n" +
        "            res--;\n" +
        "        }\n" +
        "    }\n" +
        "    reverse(ans.begin(), ans.end());\n" +
        "    for (auto i : ans) {\n" +
        "        cout << i << ' ';\n" +
        "    }\n" +
        "    cout << '\\n';\n" +
        "    return 0;\n" +
        "}\n" +
        "```"

    const content = "응디탁"

    return (
        <Row>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.neutral["100"]}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={shortCode} longCode={longCode}/>
                    <SizedBox height={"12px"}/>
                    <Sub3 text={content} textAlign={"left"}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}